/* Shared goal logic: used by the Goals page, the diary and the Claude exchange page. Reads other sections' data from localStorage. */
(function(){
  const pad = n => String(n).padStart(2,'0');
  const ymd = d => d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
  const parse = s => { const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d||1); };
  const addD = (s,n) => { const d=parse(s); d.setDate(d.getDate()+n); return ymd(d); };
  const today = () => ymd(new Date());
  const monday = s => { const d=parse(s); d.setDate(d.getDate()-((d.getDay()+6)%7)); return ymd(d); };
  const raw = k => { try{ return JSON.parse(localStorage.getItem(k)||'null'); }catch(e){ return null; } };
  const put = (k,v) => { try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} };
  const MON = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const nice = s => { const d=parse(s); return d.getDate()+' '+MON[d.getMonth()]; };
  const plural=(n,a,b,c)=>{n=Math.abs(n)%100;const n1=n%10;if(n>10&&n<20)return c;if(n1>1&&n1<5)return b;if(n1==1)return a;return c;};

  const SPHERES = ['Спорт','Английский','Техника','Чтение','Деньги','Другое'];
  const TYPES = {
    book:   {name:'Книга', hint:'прогресс по страницам'},
    weekly: {name:'Регулярное занятие', hint:'норма занятий в неделю'},
    units:  {name:'Учебник или курс', hint:'юниты или уроки, норма в неделю'},
    steps:  {name:'Проект по шагам', hint:'список шагов'},
    words:  {name:'Слова', hint:'считается само из раздела «Слова»'},
    sport:  {name:'Тренировки', hint:'считается само из тренировок'},
    english:{name:'Английский по дням', hint:'считается само: слова, занятия, юниты'}
  };
  const uid = () => 'g'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
  const book = (title, sphere, status) => ({id:uid(), title, sphere, type:'book', status, total:null, log:[], steps:[], created:Date.now()});
  function seed(){
    const t = today();
    let n = 0; const id = () => 'g0'+(n++);
    const list = [
      {id:id(), title:'Тренировки 5 раз в неделю', sphere:'Спорт', type:'sport', status:'active', perWeek:5},
      {id:id(), title:'Английский 5 дней в неделю', sphere:'Английский', type:'english', status:'active', perWeek:5},
      {id:id(), title:'Destination B1', sphere:'Английский', type:'units', status:'active', total:48, perWeek:2, unit:'юнит'},
      {id:id(), title:'300 слов к концу января', sphere:'Английский', type:'words', status:'active', total:300, deadline:'2027-01-31'},
      {id:id(), title:'Python на Stepik', sphere:'Техника', type:'weekly', status:'active', perWeek:5, note:'Минимум одно задание каждый будний день'},
      {id:id(), title:'Arduino', sphere:'Техника', type:'weekly', status:'active', perWeek:5, note:'Минимум одно задание каждый будний день',
        steps:['Купить стартовый набор','Мигающий светодиод','Кнопка и светодиод','Датчик температуры','Свой проект: таймер отдыха для тренировок'].map((s,i)=>({id:'s'+i, text:s, done:false}))},
      Object.assign(book('How Computers Really Work','Чтение','active'), {id:id()}),
      Object.assign(book('Братья Карамазовы','Чтение','active'), {id:id()}),
      Object.assign(book('Homo Sapiens','Чтение','queue'), {id:id()}),
      Object.assign(book('Богатый папа, бедный папа','Деньги','queue'), {id:id()}),
      Object.assign(book('Квадрант успеха','Деньги','queue'), {id:id()}),
      Object.assign(book('Как изобрести всё','Чтение','queue'), {id:id()}),
      Object.assign(book('Физика невозможного','Чтение','queue'), {id:id()}),
      Object.assign(book('Homo Deus','Чтение','queue'), {id:id()})
    ];
    list.forEach((g,i)=>{ g.log = g.log||[]; g.steps = g.steps||[]; g.created = Date.now()+i; if (g.status==='active') g.startedAt = t; });
    return list;
  }
  function load(){ let g = raw('goal-list'); if (!Array.isArray(g)){ g = seed(); put('goal-list', g); } return g; }
  function save(g){ put('goal-list', g); }

  /* context from other sections */
  function ctx(){
    const t = today(), m = monday(t);
    const c = {today:t, week: Array.from({length:7},(_,i)=>addD(m,i)), logs: raw('logs')||{}, words: raw('slv-words')||[], wlog: raw('slv-log')||{},
      sess: raw('hab-sessions')||[], marks: raw('hab-marks')||{}, entries: raw('bj-entries')||[]};
    c.workout = d => { const l=c.logs[d]; return !!(l && (l.exercises||[]).some(e=>(e.sets||[]).some(s=>s.done))); };
    c.english = (d, goals) => !!((c.wlog[d]||{}).reviews) || c.sess.some(s=>s.date===d && (s.hid==='english' || /англ/i.test(s.name||''))) ||
      ((c.marks[d]||{}).english>0) || (goals||[]).some(g=>g.sphere==='Английский' && (g.type==='units'||g.type==='weekly') && (g.log||[]).some(l=>l.date===d));
    return c;
  }
  const daysWithLog = (g, days) => days.filter(d=>(g.log||[]).some(l=>l.date===d)).length;
  function weekCount(g, c, goals, days){
    days = days || c.week.filter(d=>d<=c.today);
    if (g.type==='sport') return days.filter(c.workout).length;
    if (g.type==='english') return days.filter(d=>c.english(d, goals)).length;
    if (g.type==='units') return (g.log||[]).filter(l=>days.includes(l.date)).reduce((a,l)=>a+(l.n||0),0);
    return daysWithLog(g, days);
  }
  function weekStreak(g, c, goals){
    let m = monday(c.today), n = 0;
    const days = mm => Array.from({length:7},(_,i)=>addD(mm,i));
    if (weekCount(g,c,goals,days(m).filter(d=>d<=c.today)) >= g.perWeek) n++;
    m = addD(m,-7);
    while (n<520 && weekCount(g,c,goals,days(m)) >= g.perWeek){ n++; m = addD(m,-7); }
    return n;
  }
  /* summary for display: {pct, main, sub, week:{done,norm}|null, needsTotal} */
  function summary(g, c, goals){
    const s = {pct:0, main:'', sub:'', week:null, needsTotal:false};
    if (g.type==='book'){
      const cur = Math.max(0, ...(g.log||[]).map(l=>l.value||0));
      if (!g.total){ s.needsTotal = true; s.main = cur ? 'стр. '+cur : 'не начата'; return s; }
      s.pct = Math.min(1, cur/g.total); s.main = cur+' / '+g.total+' стр.';
      const first = (g.log||[])[0], start = g.startedAt || (first && first.date);
      if (cur>=g.total) s.sub = 'Прочитано';
      else if (cur>0 && start){ const days = Math.max(1, Math.round((parse(c.today)-parse(start))/864e5)+1), rate = cur/days;
        s.sub = rate>0 ? 'В таком темпе закончишь ~'+nice(addD(c.today, Math.ceil((g.total-cur)/rate))) : ''; }
      else s.sub = 'Начни: отметь страницу, на которой остановился';
      return s;
    }
    if (g.type==='steps' || (g.type==='weekly' && (g.steps||[]).length && !g.perWeek)){
      const st = g.steps||[], d = st.filter(x=>x.done).length; s.pct = st.length? d/st.length : 0; s.main = d+' / '+st.length+' шагов'; return s;
    }
    if (g.type==='words'){
      const learned = c.words.filter(w=>w.box>=5).length, inwork = c.words.filter(w=>w.seen && w.box<5).length;
      s.pct = Math.min(1, learned/(g.total||1)); s.main = learned+' / '+g.total+' выучено';
      const left = g.total-learned;
      if (g.deadline && left>0){ const wk = Math.max(1, Math.ceil((parse(g.deadline)-parse(c.today))/(7*864e5)));
        s.sub = 'В работе '+inwork+' · до '+nice(g.deadline)+' нужно ~'+Math.ceil(left/wk)+' '+plural(Math.ceil(left/wk),'слово','слова','слов')+' в неделю'; }
      else if (left<=0) s.sub = 'Цель достигнута';
      return s;
    }
    if (g.type==='units'){
      const done = (g.log||[]).reduce((a,l)=>a+(l.n||0),0), wk = weekCount(g,c,goals);
      s.pct = Math.min(1, done/(g.total||1)); s.main = done+' / '+g.total+' '+(g.unit||'юнит')+(g.total>4?'ов':'а');
      s.week = {done:wk, norm:g.perWeek};
      if (done<g.total && g.perWeek) s.sub = 'При '+g.perWeek+' в неделю закончишь ~'+nice(addD(c.today, Math.ceil((g.total-done)/g.perWeek*7)));
      return s;
    }
    /* weekly, sport, english */
    const wk = weekCount(g,c,goals), st = weekStreak(g,c,goals);
    s.week = {done:wk, norm:g.perWeek}; s.pct = Math.min(1, wk/(g.perWeek||1));
    s.main = 'Неделя: '+wk+' из '+g.perWeek;
    s.sub = st ? 'Норма выполнена '+st+' '+plural(st,'неделю','недели','недель')+' подряд' : (g.note||'');
    if ((g.steps||[]).length){ const d=g.steps.filter(x=>x.done).length; s.sub = (s.sub?s.sub+' · ':'')+'шаги '+d+'/'+g.steps.length; }
    return s;
  }
  /* diary tasks linked to goal steps: done task → done step */
  function syncSteps(goals){
    const es = raw('bj-entries')||[]; let changed = false;
    es.filter(e=>e.goalId && e.stepId && e.state==='done').forEach(e=>{
      const g = goals.find(x=>x.id===e.goalId), st = g && (g.steps||[]).find(x=>x.id===e.stepId);
      if (st && !st.done){ st.done = true; st.doneAt = e.date || today(); changed = true; } });
    if (changed) save(goals);
    return changed;
  }
  window.GoalsCore = {SPHERES, TYPES, load, save, ctx, summary, syncSteps, weekCount, uid, today, nice, addD, monday, parse, plural};
})();
