/* Companion units: numbering and order follow the book's units; explanations, examples and exercises are original.
   ex: {t:'choice', q, o:[...], a:index, why} | {t:'fill', q (with ___), a:[accepted...], why} */
const SECTIONS = [
  {title:'Present and past', ru:'Настоящее и прошедшее', units:[1,2,3,4,5,6]}
];
const UNITS = [
{n:1, title:'Present continuous', tag:'I am doing',
 theory:`
<p>Говорим о действии, которое идёт <b>прямо сейчас</b> или <b>в этот период</b> и ещё не закончилось.</p>
<div class="f">am / is / are + глагол-<b>ing</b></div>
<table class="forms"><tr><td>I</td><td>am (I'm)</td><td rowspan="3">training<br>reading<br>waiting</td></tr><tr><td>he / she / it</td><td>is (he's)</td></tr><tr><td>we / you / they</td><td>are (we're)</td></tr></table>
<h4>Когда используем</h4>
<ul>
<li><b>Сейчас, в момент речи.</b> <i>I'm sitting on the bus and reading this.</i> Я сижу в автобусе и читаю это.</li>
<li><b>Временно, в эти дни</b>, даже если не в эту секунду. <i>I'm learning 10 new words a day this month.</i> В этом месяце я учу по 10 слов в день.</li>
<li><b>Что-то меняется.</b> <i>My running is getting faster.</i> Я бегаю всё быстрее.</li>
</ul>
<h4>Вопрос и отрицание</h4>
<p><i>Are you waiting for the bus? — Yes, I am. / No, I'm not.</i><br><i>She isn't working today.</i></p>
<h4>Как пишется -ing</h4>
<p>make → <b>making</b> (немая e уходит) · run → <b>running</b>, sit → <b>sitting</b> (короткое слово: согласная удваивается) · lie → <b>lying</b></p>
<p class="note">Глаголы состояния (know, like, want…) так обычно не употребляются. Это юнит 4.</p>`,
 ex:[
 {t:'fill', q:'Look! Our bus ___ (come).', a:['is coming',"'s coming"], why:'Действие происходит прямо сейчас: is + coming.'},
 {t:'fill', q:'I ___ (read) an English text on my phone right now.', a:['am reading',"'m reading"], why:'Right now → present continuous: am reading.'},
 {t:'choice', q:'"Where\'s Max?" — "He ___ a shower."', o:['has','is having','have'], a:1, why:'Сейчас в процессе: is having. Have в значении «принимать (душ)» может быть в continuous.'},
 {t:'fill', q:'You can take my charger. I ___ (not / use) it at the moment.', a:["am not using","'m not using"], why:'Отрицание: am not + using.'},
 {t:'fill', q:'___ for the 42 bus? (you / wait)', a:['are you waiting'], why:'Вопрос: are + you + waiting.'},
 {t:'choice', q:'My English ___ better every week.', o:['gets','is getting','get'], a:1, why:'Постепенное изменение: is getting.'},
 {t:'fill', q:'I ___ (stay) with friends this week while my flat is painted.', a:['am staying',"'m staying"], why:'Временная ситуация «на этой неделе»: am staying.'},
 {t:'choice', q:'run + ing = ?', o:['runing','running','runeing'], a:1, why:'Короткое слово с одной гласной: последняя согласная удваивается — running.'}
 ]},
{n:2, title:'Present simple', tag:'I do',
 theory:`
<p>Говорим о том, что бывает <b>вообще, обычно, регулярно</b>, и о фактах.</p>
<div class="f">I / we / you / they <b>train</b> · he / she / it <b>trains</b></div>
<h4>Когда используем</h4>
<ul>
<li><b>Привычки и распорядок.</b> <i>I take the bus to work every day.</i></li>
<li><b>Факты и то, что верно всегда.</b> <i>Muscles need protein to grow.</i></li>
<li><b>Как часто:</b> always, usually, often, sometimes, never. Ставим <b>перед</b> глаголом: <i>I usually train in the morning.</i> После be — <b>после</b>: <i>I'm never late.</i></li>
</ul>
<h4>Вопрос и отрицание: do / does</h4>
<table class="forms"><tr><td>I / we / you / they</td><td><b>do</b> / don't + глагол</td></tr><tr><td>he / she / it</td><td><b>does</b> / doesn't + глагол</td></tr></table>
<p><i>Does she run every day? — Yes, she does.</i><br><i>He doesn't eat meat.</i> После does/doesn't окончание -s уже не нужно: <s>doesn't eats</s>.</p>
<h4>Как пишется -s</h4>
<p>watch → <b>watches</b>, go → <b>goes</b>, do → <b>does</b> · study → <b>studies</b> (согласная + y → ies) · have → <b>has</b></p>`,
 ex:[
 {t:'fill', q:'My bus ___ (leave) at 7:40 every morning.', a:['leaves'], why:'Расписание, he/she/it → leaves.'},
 {t:'fill', q:'I ___ (not / drink) coffee in the evening.', a:["don't drink",'do not drink'], why:'Отрицание с I: don\'t + drink.'},
 {t:'choice', q:'___ she ___ to the gym on Sundays?', o:['Do … go','Does … go','Does … goes'], a:1, why:'She → does, а глагол без -s: Does she go…?'},
 {t:'fill', q:'He ___ (study) English twice a week.', a:['studies'], why:'Согласная + y → ies: studies.'},
 {t:'choice', q:'Выбери правильный порядок слов:', o:['I go always by bus.','I always go by bus.','Always I go by bus.'], a:1, why:'Always ставится перед смысловым глаголом.'},
 {t:'fill', q:'How often ___? (you / train)', a:['do you train'], why:'Вопрос: do + you + train.'},
 {t:'fill', q:'The shop near my house ___ (not / open) until ten.', a:["doesn't open",'does not open'], why:'The shop = it → doesn\'t open.'},
 {t:'choice', q:'Sound ___ faster in water than in air.', o:['travel','travels','is travelling'], a:1, why:'Научный факт → present simple, it → travels.'}
 ]},
{n:3, title:'Present continuous и present simple, часть 1', tag:'I am doing и I do',
 theory:`
<p>Главный вопрос: действие <b>идёт сейчас / временно</b> или это <b>обычно / всегда</b>?</p>
<table class="forms cmp"><tr><th>Present continuous</th><th>Present simple</th></tr>
<tr><td>сейчас, в этот период</td><td>вообще, регулярно, постоянно</td></tr>
<tr><td><i>I'm cooking dinner, call me later.</i></td><td><i>I cook dinner most evenings.</i></td></tr>
<tr><td><i>She's working from home this week.</i></td><td><i>She works in an office.</i></td></tr>
<tr><td>now, at the moment, today, this week</td><td>usually, every day, often, never</td></tr></table>
<h4>Always + continuous</h4>
<p>Когда что-то повторяется слишком часто и раздражает: <i>He's always leaving his bag on the floor!</i> Он вечно бросает сумку на пол!</p>
<p class="note">Временное → continuous: <i>I'm living with my parents for now.</i> Постоянное → simple: <i>My parents live in Kazan.</i></p>`,
 ex:[
 {t:'choice', q:'Can you call back later? I ___ dinner.', o:['cook','am cooking'], a:1, why:'Прямо сейчас → am cooking.'},
 {t:'choice', q:'I usually ___ dinner at about seven.', o:['cook','am cooking'], a:0, why:'Usually → обычное действие → cook.'},
 {t:'fill', q:'Listen! Somebody ___ (sing) next door.', a:['is singing',"'s singing"], why:'Listen! — значит происходит сейчас.'},
 {t:'fill', q:'Tom normally works at the office, but this week he ___ (work) from home.', a:['is working',"'s working"], why:'This week, временно → is working.'},
 {t:'choice', q:'What ___ you usually ___ at weekends?', o:['do … do','are … doing'], a:0, why:'Usually → present simple: What do you usually do?'},
 {t:'choice', q:'She\'s always ___ her keys! It\'s so annoying.', o:['loses','losing'], a:1, why:'Always + continuous, когда раздражает: she\'s always losing.'},
 {t:'fill', q:'It ___ (rain) a lot here in November.', a:['rains'], why:'Обычно, каждый год → rains.'},
 {t:'choice', q:'Why ___ a jacket? It\'s so warm today!', o:['are you wearing','do you wear'], a:0, why:'Сейчас, сегодня → are you wearing.'}
 ]},
{n:4, title:'Present continuous и present simple, часть 2', tag:'глаголы состояния',
 theory:`
<p>Некоторые глаголы описывают <b>состояние</b>, а не действие. Обычно они <b>не</b> бывают в continuous, даже если речь о «сейчас».</p>
<div class="f">like · love · hate · want · need · prefer · know · understand · believe · remember · mean · belong · own · seem</div>
<p><i>I understand you now.</i> (не <s>I'm understanding</s>) · <i>I need a new pair of trainers.</i></p>
<h4>Think</h4>
<p><b>Мнение</b> → simple: <i>I think this app is useful.</i><br><b>Процесс размышления</b> → continuous: <i>What are you thinking about?</i></p>
<h4>Have</h4>
<p><b>Владеть, иметь</b> → simple: <i>He doesn't have a car.</i><br><b>Действие</b> (have lunch, have a shower, have fun) → можно continuous: <i>We're having lunch.</i></p>
<h4>See, hear, smell, taste</h4>
<p>Обычно simple, часто с can: <i>Can you hear that?</i></p>
<h4>Be</h4>
<p><i>He's being rude</i> = он <b>ведёт себя</b> грубо сейчас (не как обычно). <i>He's rude</i> = он вообще грубый.</p>`,
 ex:[
 {t:'choice', q:'I ___ what you mean.', o:['understand','am understanding'], a:0, why:'Understand — глагол состояния → simple.'},
 {t:'choice', q:'What ___ about? You look worried.', o:['do you think','are you thinking'], a:1, why:'Think = размышлять сейчас → are you thinking.'},
 {t:'choice', q:'I ___ this new app is really useful.', o:['think','am thinking'], a:0, why:'Think = мнение → simple.'},
 {t:'fill', q:'This bag ___ (belong) to my sister.', a:['belongs'], why:'Belong — состояние → belongs.'},
 {t:'choice', q:'We ___ lunch at the moment. Can I call you back?', o:['have','are having'], a:1, why:'Have lunch — действие → can be continuous: are having.'},
 {t:'choice', q:'He ___ a car, so he goes everywhere by bike.', o:["doesn't have","isn't having"], a:0, why:'Have = владеть → simple.'},
 {t:'choice', q:'Why ___ so rude to her? It\'s not like you.', o:['are you being','are you'], a:0, why:'Ведёшь себя так сейчас, не как обычно → are you being.'},
 {t:'fill', q:'I ___ (need) some water after that run.', a:['need'], why:'Need — состояние → simple.'}
 ]},
{n:5, title:'Past simple', tag:'I did',
 theory:`
<p>Действие <b>закончилось в прошлом</b>. Часто есть время: yesterday, last week, two days ago, in 2020.</p>
<h4>Форма</h4>
<p><b>Правильные</b> глаголы: + <b>-ed</b>. train → trained, study → studied, stop → stopped.<br>
<b>Неправильные</b> нужно запомнить: go → <b>went</b>, buy → <b>bought</b>, see → <b>saw</b>, take → <b>took</b>, eat → <b>ate</b>, leave → <b>left</b>, run → <b>ran</b>.</p>
<h4>Вопрос и отрицание: did</h4>
<div class="f">did / didn't + глагол в начальной форме</div>
<p><i>Did you see the match? — Yes, I did.</i><br><i>I didn't go to the gym yesterday.</i> (не <s>didn't went</s>)</p>
<h4>Was / were</h4>
<p>I / he / she / it <b>was</b> · we / you / they <b>were</b>. <i>The training was hard.</i> В вопросе и отрицании did не нужен: <i>Were you tired? — I wasn't.</i></p>`,
 ex:[
 {t:'fill', q:'I ___ (buy) new trainers last weekend.', a:['bought'], why:'Buy — неправильный: bought.'},
 {t:'fill', q:'We ___ (play) football yesterday.', a:['played'], why:'Правильный глагол: played.'},
 {t:'fill', q:'She ___ (not / go) to the gym last week.', a:["didn't go",'did not go'], why:'Отрицание: didn\'t + go (начальная форма).'},
 {t:'choice', q:'___ you ___ the film last night?', o:['Did … see','Did … saw','Do … saw'], a:0, why:'Did + начальная форма: Did you see?'},
 {t:'fill', q:'The training ___ (be) really hard yesterday.', a:['was'], why:'It → was.'},
 {t:'choice', q:'When ___ you start learning English?', o:['did','were'], a:0, why:'Start — обычный глагол, вопрос через did.'},
 {t:'fill', q:'I ___ (study) for two hours last night.', a:['studied'], why:'Согласная + y → ied: studied.'},
 {t:'choice', q:'He ___ his phone on the bus this morning.', o:['leaved','left','leave'], a:1, why:'Leave — неправильный: left.'}
 ]},
{n:6, title:'Past continuous', tag:'I was doing',
 theory:`
<p>Действие <b>было в процессе</b> в определённый момент прошлого: начиналось раньше и ещё не закончилось.</p>
<div class="f">was / were + глагол-<b>ing</b></div>
<p><i>At 8 pm yesterday I was running in the park.</i> В 8 вечера я бегал в парке (был в процессе).</p>
<h4>С past simple</h4>
<p>Длинное действие (фон) — continuous, короткое, которое его прервало — simple:<br>
<i>I was waiting for the bus when it started to rain.</i> Я ждал автобус, когда начался дождь.</p>
<h4>While</h4>
<p>Два процесса одновременно: <i>While I was cooking, she was setting the table.</i></p>
<h4>Сравни</h4>
<p><i>When he arrived, we <b>were having</b> dinner.</i> — уже ели, когда он пришёл.<br><i>When he arrived, we <b>had</b> dinner.</i> — сначала пришёл, потом поели.</p>
<p class="note">Глаголы состояния и тут обычно не в continuous: <i>I knew the answer</i>, не <s>was knowing</s>.</p>`,
 ex:[
 {t:'fill', q:'At 8 o\'clock last night I ___ (watch) a match.', a:['was watching'], why:'В процессе в момент прошлого: was watching.'},
 {t:'choice', q:'Выбери правильное предложение:', o:['When the bus came, I was writing a message.','When the bus was coming, I wrote a message.'], a:0, why:'Фон (писал) — continuous, короткое событие (пришёл автобус) — simple.'},
 {t:'fill', q:'What ___ at 10 am yesterday? (you / do)', a:['were you doing'], why:'Вопрос: were + you + doing.'},
 {t:'choice', q:'While I ___, I hurt my knee.', o:['was running','ran'], a:0, why:'While + длительный фон: was running.'},
 {t:'fill', q:'We ___ (not / sleep) when you called.', a:["weren't sleeping",'were not sleeping'], why:'We → weren\'t sleeping.'},
 {t:'choice', q:'It ___ when I left the house, so I took an umbrella.', o:['was raining','rained'], a:0, why:'Дождь уже шёл в тот момент: was raining.'},
 {t:'choice', q:'I ___ my keys while I ___ for the bus.', o:['lost … was waiting','was losing … waited'], a:0, why:'Короткое событие (потерял) — simple, фон (ждал) — continuous.'},
 {t:'choice', q:'She ___ the answer, so she didn\'t ask.', o:['was knowing','knew'], a:1, why:'Know — глагол состояния, не бывает в continuous.'}
 ]}
];
