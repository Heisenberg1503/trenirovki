/* Companion units: numbering and order follow the book's units; explanations, examples and exercises are original.
   ex: {t:'choice', q, o:[...], a:index, why} | {t:'fill', q (with ___), a:[accepted...], why} */
const SECTIONS = [
  {title:'Present and past', ru:'Настоящее и прошедшее', units:[1,2,3,4,5,6]},
  {title:'Present perfect and past', ru:'Present perfect и прошедшее', units:[7,8,9,10,11,12,13,14,15,16,17,18]}
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
 ]},
{n:7, title:"Present perfect, часть 1", tag:"I have done",
 theory:`
<p>Действие случилось в прошлом, но нам важен <b>результат сейчас</b>. Когда именно — не говорим.</p>
<div class="f">have / has + 3-я форма глагола</div>
<p>Правильные: train → <b>trained</b>. Неправильные: do → <b>done</b>, go → <b>gone</b>, see → <b>seen</b>, eat → <b>eaten</b>, write → <b>written</b>, lose → <b>lost</b>, buy → <b>bought</b>, take → <b>taken</b>, break → <b>broken</b>.</p>
<p><i>I've lost my keys.</i> Я потерял ключи (и сейчас их нет, домой не попасть).</p>
<h4>just · already · yet</h4>
<ul>
<li><b>just</b> — только что: <i>I've just finished my workout.</i></li>
<li><b>already</b> — уже (раньше, чем ждали): <i>The bus has already left.</i></li>
<li><b>yet</b> — в вопросах и отрицаниях, в конце: <i>Have you eaten yet? I haven't eaten yet.</i></li>
</ul>
<h4>gone или been</h4>
<p><i>She's <b>gone</b> to the gym.</i> Ушла и сейчас там.<br><i>She's <b>been</b> to the gym.</i> Сходила и уже вернулась.</p>`,
 ex:[
 {t:"fill", q:"I can't open the door. I ___ (lose) my keys.", a:["have lost","'ve lost"], why:"Результат сейчас (не могу войти): have lost."},
 {t:"fill", q:"“Is Anna here?” — “No, she ___ (go) out.”", a:["has gone","'s gone"], why:"Ушла и сейчас её нет: has gone."},
 {t:"choice", q:"“I ___ finished my workout.” — “Already?”", o:["have just","just have","have yet"], a:0, why:"Just стоит между have и 3-й формой."},
 {t:"fill", q:"___ the new episode yet? (you / watch)", a:["have you watched"], why:"Вопрос: have + you + watched."},
 {t:"choice", q:"We haven't eaten ___.", o:["yet","already","just"], a:0, why:"В отрицании в конце предложения — yet."},
 {t:"choice", q:"“Where's Max?” — “He ___ to the shop. He'll be back soon.”", o:["has been","has gone"], a:1, why:"Он ещё там → has gone."},
 {t:"fill", q:"Look! Somebody ___ (break) the window.", a:["has broken","'s broken"], why:"Видим результат: has broken."},
 {t:"choice", q:"3-я форма глагола write:", o:["wrote","written","writed"], a:1, why:"write — wrote — written."}
 ]},
{n:8, title:"Present perfect, часть 2", tag:"I have done",
 theory:`
<p>Ещё два частых случая present perfect.</p>
<h4>Опыт: было ли когда-нибудь в жизни</h4>
<p><i>Have you <b>ever</b> run a marathon?</i> — <i>No, I've <b>never</b> run one.</i><br>
<i>It's the <b>first time</b> I've studied on a bus.</i> Я впервые занимаюсь в автобусе.<br>
<i>It's the <b>best</b> workout I've <b>ever</b> done.</i></p>
<h4>Период ещё не закончился</h4>
<p>today, this week, this month, this year, recently, so far — если период продолжается сейчас:<br>
<i>I've drunk three coffees today.</i> (день ещё идёт)<br>
<i>How many words have you learned so far?</i></p>
<p class="note">Сравни: <i>I've trained twice this week</i> (неделя идёт), но <i>I trained twice last week</i> (прошедшая неделя — past simple, юнит 14).</p>`,
 ex:[
 {t:"fill", q:"___ sushi? (you / ever / eat)", a:["have you ever eaten"], why:"Опыт в жизни: have you ever + 3-я форма."},
 {t:"fill", q:"I ___ (never / run) a marathon.", a:["have never run","'ve never run"], why:"never ставится между have и 3-й формой."},
 {t:"choice", q:"This is the first time I ___ English on a bus.", o:["study","have studied","am studying"], a:1, why:"It's the first time + present perfect."},
 {t:"choice", q:"It's the best workout I ___.", o:["ever did","have ever done","had ever"], a:1, why:"Превосходная степень + I've ever done."},
 {t:"fill", q:"I ___ (drink) three cups of coffee today.", a:["have drunk","'ve drunk"], why:"Today ещё не закончился: have drunk."},
 {t:"choice", q:"She has trained twice ___.", o:["last week","this week","yesterday"], a:1, why:"Present perfect — с незаконченным периодом: this week."},
 {t:"fill", q:"How many words ___ so far? (you / learn)", a:["have you learned","have you learnt"], why:"So far — до сих пор: have you learned."},
 {t:"choice", q:"“Have you been to London?” — “No, ___.”", o:["I never was","I've never been","I didn't"], a:1, why:"Опыт в жизни: I've never been."}
 ]},
{n:9, title:"Present perfect continuous", tag:"I have been doing",
 theory:`
<p>Действие <b>длилось</b> какое-то время до сейчас: ещё идёт или только что закончилось, и это заметно.</p>
<div class="f">have / has been + глагол-<b>ing</b></div>
<ul>
<li><b>Видны следы процесса.</b> <i>You're out of breath. Have you been running?</i> Ты запыхался. Бегал?</li>
<li><b>Сколько уже длится.</b> <i>I've been waiting for twenty minutes.</i> Я жду уже двадцать минут.<br><i>She's been learning Spanish since September.</i></li>
<li><b>В последнее время.</b> <i>I've been sleeping badly lately.</i></li>
</ul>
<p class="note">Глаголы состояния (know, like, have = владеть) так не употребляются: <i>I've known him for years</i>, не <s>I've been knowing</s>.</p>`,
 ex:[
 {t:"fill", q:"You're out of breath. ___? (you / run)", a:["have you been running"], why:"Видны следы процесса: have you been running?"},
 {t:"fill", q:"I ___ (wait) for the bus for twenty minutes.", a:["have been waiting","'ve been waiting"], why:"Длится до сих пор: have been waiting."},
 {t:"choice", q:"The ground is wet. It ___.", o:["has been raining","is raining","rains"], a:0, why:"Дождь шёл до недавнего времени, видим результат: has been raining."},
 {t:"fill", q:"She ___ (learn) Spanish since September.", a:["has been learning","'s been learning"], why:"С сентября и до сих пор: has been learning."},
 {t:"choice", q:"How long ___ here?", o:["are you living","have you been living","do you live"], a:1, why:"How long до сейчас — present perfect continuous."},
 {t:"fill", q:"My legs hurt because I ___ (train) a lot lately.", a:["have been training","'ve been training"], why:"В последнее время: have been training."},
 {t:"choice", q:"I ___ him for ten years.", o:["have known","have been knowing"], a:0, why:"Know — глагол состояния: have known."},
 {t:"fill", q:"What ___? Your hands are covered in paint. (you / do)", a:["have you been doing"], why:"Видны следы занятия: have you been doing?"}
 ]},
{n:10, title:"Present perfect continuous и simple", tag:"I have been doing и I have done",
 theory:`
<table class="forms cmp"><tr><th>have been doing</th><th>have done</th></tr>
<tr><td><b>процесс</b>, сколько времени</td><td><b>результат</b>, сколько сделано</td></tr>
<tr><td><i>I've been reading this book all week.</i> (ещё читаю)</td><td><i>I've read 40 pages today.</i> / <i>I've read the book.</i> (дочитал)</td></tr>
<tr><td>How long…?</td><td>How many / How much…? How many times…?</td></tr>
<tr><td><i>She's been training since 7.</i></td><td><i>She's trained three times this week.</i></td></tr></table>
<p class="note">Спрашиваешь «как долго» — continuous. Спрашиваешь «сколько штук / раз» или «готово ли» — simple.</p>`,
 ex:[
 {t:"choice", q:"I ___ this book for a week. I'm halfway through.", o:["have been reading","have read"], a:0, why:"Процесс, ещё не закончен: have been reading."},
 {t:"choice", q:"I ___ 40 pages today.", o:["have been reading","have read"], a:1, why:"Сколько сделано: have read."},
 {t:"choice", q:"She ___ three times this week.", o:["has been training","has trained"], a:1, why:"Сколько раз — simple: has trained."},
 {t:"fill", q:"How long ___ English? (you / learn)", a:["have you been learning"], why:"How long — continuous."},
 {t:"fill", q:"How many words ___ today? (you / learn)", a:["have you learned","have you learnt"], why:"How many — simple."},
 {t:"choice", q:"Sorry I'm late. ___ long?", o:["Have you been waiting","Have you waited"], a:0, why:"Длительность ожидания: have you been waiting."},
 {t:"choice", q:"I ___ my homework. Can I go out now?", o:["have been doing","have done"], a:1, why:"Готово, результат: have done."},
 {t:"fill", q:"He's tired because he ___ (work) all day.", a:["has been working","'s been working"], why:"Процесс весь день, следствие — усталость."}
 ]},
{n:11, title:"How long have you (been)…?", tag:"от прошлого до сейчас",
 theory:`
<p>Ситуация началась в прошлом и <b>продолжается сейчас</b>. По-русски говорим в настоящем времени, по-английски нужен <b>present perfect</b>.</p>
<p>Я живу здесь три года. → <i>I've lived / I've been living here for three years.</i><br>
Не <s>I live here for three years</s>.</p>
<ul>
<li>С глаголами состояния — simple: <i>We've known each other since school.</i> <i>How long have you had this bike?</i></li>
<li>С be: <i>She's been ill since Monday.</i> <i>How long have they been married?</i></li>
<li>С действиями — обычно continuous: <i>I've been training for a year.</i></li>
</ul>
<h4>Давно не…</h4>
<p><i>I haven't seen my brother for two months.</i><br><i>It's three weeks since I started running.</i> Прошло три недели с тех пор, как я начал бегать.</p>`,
 ex:[
 {t:"choice", q:"We ___ each other since school.", o:["know","have known","are knowing"], a:1, why:"С прошлого до сейчас + know: have known."},
 {t:"choice", q:"Я живу в этом городе 3 года.", o:["I live in this city for 3 years.","I have lived in this city for 3 years."], a:1, why:"Русское настоящее «живу уже 3 года» = present perfect."},
 {t:"fill", q:"How long ___ married? (they / be)", a:["have they been"], why:"Be: how long have they been…?"},
 {t:"fill", q:"I ___ (not / see) my brother for two months.", a:["haven't seen","have not seen"], why:"Давно не видел: haven't seen."},
 {t:"choice", q:"How long ___ this car?", o:["do you have","have you had"], a:1, why:"Владею с прошлого до сейчас: have you had."},
 {t:"fill", q:"It's three weeks ___ I started running. (одно слово)", a:["since"], why:"It's … since — прошло … с тех пор как."},
 {t:"choice", q:"“Are you still running?” — “Yes, I ___ for a year now.”", o:["run","have been running"], a:1, why:"Действие длится год до сейчас."},
 {t:"choice", q:"She ___ ill since Monday.", o:["is","has been"], a:1, why:"С понедельника до сейчас: has been."}
 ]},
{n:12, title:"For и since, when…? и how long…?", tag:"for · since · ago",
 theory:`
<table class="forms cmp"><tr><th>for + отрезок</th><th>since + точка начала</th></tr>
<tr><td>for two hours, for a week, for ages, for a long time</td><td>since 8 o'clock, since Monday, since 2020, since I was a child</td></tr></table>
<p><i>I've been learning English for two months.</i> · <i>…since September.</i></p>
<h4>When? и How long?</h4>
<p><b>When</b> — когда началось → past simple: <i>When did you start going to the gym? — In September.</i><br>
<b>How long</b> — как долго до сейчас → present perfect: <i>How long have you been going? — For two months.</i></p>
<h4>ago</h4>
<p>ago = «тому назад», с past simple: <i>I started two months ago.</i></p>`,
 ex:[
 {t:"choice", q:"I've been learning English ___ two months.", o:["for","since"], a:0, why:"Two months — отрезок: for."},
 {t:"choice", q:"She's lived here ___ 2019.", o:["for","since"], a:1, why:"2019 — точка начала: since."},
 {t:"choice", q:"We've been waiting ___ ten o'clock.", o:["for","since"], a:1, why:"Ten o'clock — точка: since."},
 {t:"choice", q:"I haven't trained ___ ages.", o:["for","since"], a:0, why:"For ages — целую вечность (отрезок)."},
 {t:"fill", q:"___ did you start going to the gym? — In September. (одно слово)", a:["when"], why:"Когда началось — when + past simple."},
 {t:"fill", q:"___ have you been going to the gym? — For two months. (два слова)", a:["how long"], why:"Как долго — how long + present perfect."},
 {t:"choice", q:"I started running two months ___.", o:["ago","since","for"], a:0, why:"Тому назад — ago, с past simple."},
 {t:"choice", q:"It's a year ___ we moved here.", o:["since","for","ago"], a:0, why:"It's a year since… — прошёл год с тех пор как."}
 ]},
{n:13, title:"Present perfect и past simple, часть 1", tag:"I have done и I did",
 theory:`
<table class="forms cmp"><tr><th>I have done</th><th>I did</th></tr>
<tr><td>связь с <b>сейчас</b>, время не важно</td><td>закончено в прошлом, <b>есть время</b> или история</td></tr>
<tr><td><i>I've lost my phone.</i> (всё ещё нет)</td><td><i>I lost my phone yesterday.</i></td></tr>
<tr><td><i>Look! It has stopped snowing.</i></td><td><i>It stopped snowing an hour ago.</i></td></tr></table>
<h4>Новость → подробности</h4>
<p>Сообщаем новость в present perfect, а детали — в past simple:<br>
<i>I've hurt my knee. — How did you do that? — I fell while I was running.</i></p>
<h4>When…? — всегда past simple</h4>
<p><i>When did you buy it?</i>, не <s>When have you bought it?</s></p>
<p class="note">Если человек или период уже в прошлом целиком — past simple: <i>My grandfather worked in a factory all his life.</i> (он на пенсии)</p>`,
 ex:[
 {t:"choice", q:"I ___ my phone yesterday.", o:["have lost","lost"], a:1, why:"Есть время (yesterday) → past simple."},
 {t:"choice", q:"I ___ my phone. Can you call it?", o:["have lost","lost"], a:0, why:"Важен результат сейчас: have lost."},
 {t:"choice", q:"When ___ the bus?", o:["did you take","have you taken"], a:0, why:"When → past simple."},
 {t:"fill", q:"I ___ (finish) the report last night.", a:["finished"], why:"Last night → past simple."},
 {t:"choice", q:"“I've hurt my knee.” — “How ___ that?”", o:["have you done","did you do"], a:1, why:"Подробности новости — past simple."},
 {t:"fill", q:"___ the new gym yet? (you / try)", a:["have you tried"], why:"Yet, связь с сейчас: have you tried."},
 {t:"choice", q:"My grandfather ___ in a factory all his life. Now he's retired.", o:["has worked","worked"], a:1, why:"Этот период закончился → past simple."},
 {t:"choice", q:"Look! It ___ snowing.", o:["has stopped","stopped"], a:0, why:"Видим результат сейчас: has stopped."}
 ]},
{n:14, title:"Present perfect и past simple, часть 2", tag:"слова-подсказки",
 theory:`
<table class="forms cmp"><tr><th>Present perfect</th><th>Past simple</th></tr>
<tr><td>период <b>ещё идёт</b>: today, this week, this year, so far, recently, ever, never, yet</td><td>период <b>закончился</b>: yesterday, last week, in 2020, two days ago, when I was a child</td></tr>
<tr><td><i>I haven't trained much this week.</i></td><td><i>I didn't train much last week.</i></td></tr></table>
<h4>This morning</h4>
<p>Сейчас 10 утра: <i>I've had two coffees this morning.</i><br>Сейчас вечер: <i>I had two coffees this morning.</i> (утро уже прошло)</p>
<h4>Опыт и конкретный случай</h4>
<p><i>Have you ever been to Sochi?</i> (вообще в жизни) → <i>Yes, I went there last summer.</i> (конкретно когда)</p>`,
 ex:[
 {t:"choice", q:"I ___ two coffees this morning. (Сейчас вечер.)", o:["have had","had"], a:1, why:"Утро уже прошло → past simple."},
 {t:"choice", q:"I ___ two coffees this morning. (Сейчас 10 утра.)", o:["have had","had"], a:0, why:"Утро ещё идёт → present perfect."},
 {t:"choice", q:"We ___ to Sochi last summer.", o:["have been","went"], a:1, why:"Last summer → past simple."},
 {t:"choice", q:"___ to Sochi? It's beautiful.", o:["Have you ever been","Did you ever go"], a:0, why:"Опыт в жизни без времени: have you ever been."},
 {t:"fill", q:"She ___ (start) a new job three weeks ago.", a:["started"], why:"Ago → past simple."},
 {t:"choice", q:"I ___ much this week. I'm so busy.", o:["haven't trained","didn't train"], a:0, why:"Неделя ещё идёт → present perfect."},
 {t:"fill", q:"I ___ (not / sleep) well last night.", a:["didn't sleep","did not sleep"], why:"Last night → past simple."},
 {t:"choice", q:"“Is Tom here?” — “No, he ___ five minutes ago.”", o:["has left","left"], a:1, why:"Five minutes ago → past simple."}
 ]},
{n:15, title:"Past perfect", tag:"I had done",
 theory:`
<p>Рассказываем о прошлом и хотим сказать, что что-то случилось <b>ещё раньше</b>, до того момента.</p>
<div class="f">had + 3-я форма</div>
<p><i>When I got to the stop, the bus <b>had</b> already <b>left</b>.</i> Когда я дошёл до остановки, автобус уже ушёл (раньше).</p>
<h4>Сравни</h4>
<p><i>When I arrived, the match <b>started</b>.</i> — начался, когда я пришёл.<br>
<i>When I arrived, the match <b>had started</b>.</i> — начался до меня, я опоздал.</p>
<ul>
<li><i>I wasn't hungry. I'd had lunch.</i> (had had — это нормально)</li>
<li><i>She had never seen snow before she moved to Moscow.</i></li>
<li><i>By the time I finished, everyone had gone home.</i></li>
</ul>`,
 ex:[
 {t:"fill", q:"When I got to the stop, the bus ___ (already / leave).", a:["had already left","'d already left"], why:"Ушёл раньше моего прихода: had already left."},
 {t:"choice", q:"I wasn't hungry because I ___ lunch.", o:["had","had had"], a:1, why:"Обед был раньше момента в прошлом: had had."},
 {t:"fill", q:"She ___ (never / see) snow before she moved to Moscow.", a:["had never seen","'d never seen"], why:"Опыт до момента в прошлом: had never seen."},
 {t:"choice", q:"When we arrived, the match ___, so we saw the whole game.", o:["had started","started"], a:1, why:"Видели всю игру → началась, когда пришли: started."},
 {t:"fill", q:"By the time I finished, everyone ___ (go) home.", a:["had gone","'d gone"], why:"Раньше, чем я закончил: had gone."},
 {t:"choice", q:"I ___ the film before, so I knew the ending.", o:["had seen","saw"], a:0, why:"Смотрел раньше момента в прошлом: had seen."},
 {t:"fill", q:"___ before you came to the gym? (you / eat)", a:["had you eaten"], why:"Вопрос: had + you + eaten."},
 {t:"choice", q:"He couldn't get in because he ___ his keys.", o:["lost","had lost"], a:1, why:"Потерял раньше, чем пытался войти: had lost."}
 ]},
{n:16, title:"Past perfect continuous", tag:"I had been doing",
 theory:`
<p>Процесс <b>длился до определённого момента в прошлом</b> (и мог только что закончиться).</p>
<div class="f">had been + глагол-<b>ing</b></div>
<p><i>I was out of breath because I'd been running.</i> Я запыхался, потому что (до этого) бегал.<br>
<i>We'd been waiting for an hour when the bus finally came.</i> Мы ждали уже час, когда автобус наконец пришёл.</p>
<h4>Сравни со «сейчас»</h4>
<p><i>I've been waiting for an hour.</i> — жду до сих пор (юнит 9).<br><i>I'd been waiting for an hour.</i> — ждал до момента в прошлом.</p>
<p class="note">Глаголы состояния — past perfect simple: <i>I'd known him for years</i>, не <s>had been knowing</s>.</p>`,
 ex:[
 {t:"fill", q:"I was out of breath because I ___ (run).", a:["had been running","'d been running"], why:"Процесс до момента в прошлом: had been running."},
 {t:"fill", q:"We ___ (wait) for an hour when the bus finally came.", a:["had been waiting","'d been waiting"], why:"Длилось час до прихода автобуса."},
 {t:"choice", q:"Her eyes were red. She ___.", o:["had been crying","has been crying"], a:0, why:"Рассказ в прошлом (were) → had been crying."},
 {t:"choice", q:"I ___ English for two years before I went to London.", o:["had been learning","have been learning"], a:0, why:"До события в прошлом: had been learning."},
 {t:"fill", q:"How long ___ there before you moved? (you / live)", a:["had you been living","had you lived"], why:"До переезда в прошлом: had you been living."},
 {t:"choice", q:"The ground was wet. It ___.", o:["had been raining","has been raining"], a:0, why:"Рассказ в прошлом → had been raining."},
 {t:"choice", q:"I ___ him for years before we became friends.", o:["had known","had been knowing"], a:0, why:"Know — состояние: had known."},
 {t:"choice", q:"He was tired because he ___ all night.", o:["had been working","has been working"], a:0, why:"Прошлое (was) → had been working."}
 ]},
{n:17, title:"Have и have got", tag:"иметь",
 theory:`
<p>Когда речь о том, что <b>есть, принадлежит</b> (машина, брат, головная боль), можно сказать <b>have</b> или <b>have got</b>. Have got — более разговорное британское.</p>
<table class="forms cmp"><tr><th>have</th><th>have got</th></tr>
<tr><td><i>I have a bike.</i></td><td><i>I've got a bike.</i></td></tr>
<tr><td><i>Do you have…?</i></td><td><i>Have you got…?</i></td></tr>
<tr><td><i>I don't have time.</i></td><td><i>I haven't got time.</i></td></tr></table>
<p class="note">Не смешивай: <s>Do you have got</s>, <s>Have you a car?</s></p>
<h4>В прошлом — только had</h4>
<p><i>I had a headache yesterday.</i> <i>Did you have a car then?</i></p>
<h4>Have как действие</h4>
<p>have breakfast, have a shower, have a rest, have a good time — только <b>have</b> (без got), можно в continuous:<br><i>I'm having dinner, I'll call you back.</i></p>`,
 ex:[
 {t:"choice", q:"___ a bike?", o:["Do you have","Have you a"], a:0, why:"Do you have…? (Have you a…? — так не говорят.)"},
 {t:"choice", q:"___ any brothers or sisters?", o:["Have you got","Do you got"], a:0, why:"Have you got…?"},
 {t:"fill", q:"I ___ (not / have got) time today.", a:["haven't got","have not got"], why:"Отрицание: haven't got."},
 {t:"choice", q:"She ___ a headache yesterday.", o:["had","had got"], a:0, why:"В прошлом — просто had."},
 {t:"choice", q:"We usually ___ breakfast at 7.", o:["have","have got"], a:0, why:"Have breakfast — действие, только have."},
 {t:"choice", q:"I can't talk now, I ___ dinner.", o:["am having","have got"], a:0, why:"Действие сейчас: am having."},
 {t:"fill", q:"___ a car when you lived in Kazan? (you / have)", a:["did you have"], why:"Прошлое: did you have."},
 {t:"choice", q:"He ___ a shower right now.", o:["is having","has got"], a:0, why:"Have a shower — действие, сейчас: is having."}
 ]},
{n:18, title:"Used to", tag:"used to (do)",
 theory:`
<p>То, что было <b>раньше регулярно или постоянно, а теперь — нет</b>.</p>
<div class="f">used to + глагол в начальной форме</div>
<p><i>I used to run every morning.</i> Раньше я бегал каждое утро (сейчас нет).<br>
<i>There used to be a cinema here.</i> Раньше здесь был кинотеатр.</p>
<h4>Вопрос и отрицание</h4>
<p><i>Did you <b>use</b> to play football?</i> · <i>I didn't <b>use</b> to like vegetables.</i> После did — use без d.</p>
<h4>Настоящее</h4>
<p>Для того, что делаешь сейчас регулярно, нужен present simple: <i>I usually go to the gym three times a week.</i> Не <s>I use to go</s>.</p>
<p class="note">Не путай с <b>be used to</b> (привыкнуть): <i>I'm used to getting up early.</i> Это отдельная тема, юнит 61.</p>`,
 ex:[
 {t:"fill", q:"I ___ (smoke), but I stopped two years ago.", a:["used to smoke"], why:"Раньше было, теперь нет: used to smoke."},
 {t:"choice", q:"___ to play football at school?", o:["Did you use","Did you used","Used you"], a:0, why:"Вопрос: did you use to…"},
 {t:"fill", q:"She ___ (not / like) vegetables, but now she loves them.", a:["didn't use to like","did not use to like"], why:"Отрицание: didn't use to like."},
 {t:"choice", q:"I ___ go to the gym three times a week now.", o:["use to","usually","used to"], a:1, why:"Настоящая привычка — usually + present simple."},
 {t:"choice", q:"There ___ a cinema here, but they closed it.", o:["used to be","use to be"], a:0, why:"Раньше был: used to be."},
 {t:"fill", q:"We ___ (live) in a small town when I was a child.", a:["used to live","lived"], why:"Раньше постоянно: used to live (или просто lived)."},
 {t:"choice", q:"Я раньше много читал.", o:["I used to read a lot.","I use to read a lot.","I was used to read a lot."], a:0, why:"Раньше и теперь нет: I used to read."},
 {t:"choice", q:"He ___ his car to work, but now he goes by bus.", o:["used to drive","was used to drive"], a:0, why:"Прошлая привычка: used to drive."}
 ]}
];
