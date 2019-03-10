const Koa = require('koa');
const app = new Koa();

const mockItem = (time) => ({
  "_id": "5c7f673fds3f9297" + time,
  "fancyData": [
    {
      "cron_status": 1,
      "NoValume": 100,
      "YesValume": 100,
      "SessInptYes": 1,
      "SessInptNo": 1,
      "DisplayMsg": ""
    }
  ],
  "split": false,
  "status": false,
  "timeSet": null,
  "inPlay": false,
  "updateTimeStatus": false,
  "inPlayTime": 3,
  "match_id": 29163335,
  "title": "New Zealand v Bangladesh (2nd Test)",
  "match_market_id": "1.155693649",
  "headname": "TEST0" + time,
  "max_bet": 5000,
  "min_bet": 500,
  "cron_status": 1,
  "DisplayMsg": "",
  "maxLiabilityPerBet": 1000,
  "max_profit": 10000,
  "bet_delay": 0,
  "result": null,
  "createdAt": "2019-03-06T11:52:48.089Z",
  "updatedAt": "2019-03-06T11:52:48.089Z",
  "__v": 0
});
let data = [
  {
    "_id": "5c7f673fds3f929752ede2d78",
    "fancyData": [
      {
        "cron_status": 1,
        "NoValume": 100,
        "YesValume": 100,
        "SessInptYes": 1,
        "SessInptNo": 1,
        "DisplayMsg": ""
      }
    ],
    "split": false,
    "status": false,
    "timeSet": null,
    "inPlay": false,
    "updateTimeStatus": false,
    "inPlayTime": 3,
    "match_id": 29163335,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.155693649",
    "headname": "TEST0009",
    "max_bet": 5000,
    "min_bet": 500,
    "cron_status": 1,
    "DisplayMsg": "",
    "maxLiabilityPerBet": 1000,
    "max_profit": 10000,
    "bet_delay": 0,
    "result": null,
    "createdAt": "2019-03-06T11:52:48.089Z",
    "updatedAt": "2019-03-06T11:52:48.089Z",
    "__v": 0
  },
  {
    "_id": "5c7a67df9sdses29752ede2d78",
    "fancyData": [
      {
        "cron_status": 1,
        "NoValume": 100,
        "YesValume": 100,
        "SessInptYes": 1,
        "SessInptNo": 1,
        "DisplayMsg": ""
      }
    ],
    "split": false,
    "status": false,
    "timeSet": null,
    "inPlay": false,
    "updateTimeStatus": false,
    "inPlayTime": 3,
    "match_id": 29163335,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.155693649",
    "headname": "TEST00011",
    "max_bet": 5000,
    "min_bet": 500,
    "cron_status": 1,
    "DisplayMsg": "",
    "maxLiabilityPerBet": 1000,
    "max_profit": 10000,
    "bet_delay": 0,
    "result": null,
    "createdAt": "2019-03-06T11:52:48.089Z",
    "updatedAt": "2019-03-06T11:52:48.089Z",
    "__v": 0
  },
  {
    "_id": "5c7f67df9sss29752efdsew78",
    "fancyData": [
      {
        "cron_status": 1,
        "NoValume": 100,
        "YesValume": 100,
        "SessInptYes": 1,
        "SessInptNo": 1,
        "DisplayMsg": ""
      }
    ],
    "split": false,
    "status": false,
    "timeSet": null,
    "inPlay": false,
    "updateTimeStatus": false,
    "inPlayTime": 3,
    "match_id": 29163335,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.155693649",
    "headname": "TEST00010",
    "max_bet": 5000,
    "min_bet": 500,
    "cron_status": 1,
    "DisplayMsg": "",
    "maxLiabilityPerBet": 1000,
    "max_profit": 10000,
    "bet_delay": 0,
    "result": null,
    "createdAt": "2019-03-06T11:52:48.089Z",
    "updatedAt": 1,
    "__v": 0
  },
];
const getBody = (odds, cron_status) => {
  data[2].fancyData[0].cron_status = cron_status;
  data[2].fancyData[0].SessInptYes = odds;
  data[2].cron_status = cron_status;
  console.log(data[2])
  return {
    "status": 200,
    "data": data,
  }}
let isBallRunning = false;
let time;
app.use(async ctx => {
    
    if (ctx.originalUrl === '/ping') {
        ctx.res.writeHead(200)
        ctx.res.write(`<html><body><script>
        
        var run = () => fetch('/').then(a => a.json()).then(d=>{

            var elm = d.data.map(_ => {
            var node = document.createElement('div');
            node.innerText = _.fancyData[0].SessInptYes + '    ' + _.fancyData[0].cron_status;
            return node;
            })
            var nodes = document.createElement('div');
            elm.map(_ => nodes.append(_));
            document.body.innerText = '';
            document.body.append(nodes);
        })
        var go = setInterval(run, 100);
            </script></body></html>`)
        ctx.res.end()
    } else if (ctx.originalUrl.indexOf('/sleep') > -1) {
        const second = Number(ctx.originalUrl.replace('/sleep', ''));
        const sleep = () => new Promise(res => {
          setTimeout(() => {
            console.log('sdfd')
            res();
          }, (second || 1) * 1000)
        })
        await sleep();
        ctx.body = { success: true };
        ctx.res.end()
    } else if (ctx.originalUrl.indexOf('/add') > -1) {
        data.push(mockItem(Date.now()));
    } else {
        isBallRunning = !isBallRunning;
        !time && (time = new Date());
        // if (new Date() - time > 1000 * 1) {
            time = new Date()
        // }
        ctx.body = getBody(`${time.getSeconds()}${Math.floor(time.getMilliseconds()/100)}`, isBallRunning ? 0 : 1);
    }
});
  
app.listen(process.env.PORT || 3000);