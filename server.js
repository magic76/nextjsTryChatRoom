const Koa = require('koa');
const app = new Koa();

const mockItem = (time) => ({
  "_id": "5c7sdq3fds3f9297" + time,
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
  "match_id": 29175469,
  "title": "New Zealand v Bangladesh (2nd Test)",
  "match_market_id": "1.156029807",
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
    "_id": "5c7dfsew3s3f929752ede2d78",
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
    "match_id": 29175469,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.156029807",
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
    "_id": "5c7a6dsf33f9sdses29752ede2d78",
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
    "match_id": 29175469,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.156029807",
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
    "_id": "5c7ffds39sss29752efdsew78",
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
    "match_id": 29175469,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.156029807",
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

  {
    "_id": "5c7f6fds3dadsdsefdsew78",
    "fancyData": [
      {
        "cron_status": 0,
        "NoValume": 90,
        "YesValume": 90,
        "SessInptYes": 2,
        "SessInptNo": 3,
        "DisplayMsg": "SUSPEND"
      }
    ],
    "split": false,
    "status": false,
    "timeSet": null,
    "inPlay": false,
    "updateTimeStatus": false,
    "inPlayTime": 3,
    "match_id": 29175469,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.156029807",
    "headname": "TEST999",
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

  {
    "_id": "5c7f67dffdsf3fdsefdsew78fdfd",
    "fancyData": [
      {
        "cron_status": 0,
        "NoValume": 90,
        "YesValume": 90,
        "SessInptYes": 2,
        "SessInptNo": 3,
        "DisplayMsg": "SUSPEND"
      }
    ],
    "split": false,
    "status": false,
    "timeSet": null,
    "inPlay": false,
    "updateTimeStatus": false,
    "inPlayTime": 3,
    "match_id": 29175469,
    "title": "New Zealand v Bangladesh (2nd Test)",
    "match_market_id": "1.156029807",
    "headname": "TEST888",
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
        ctx.body = { message: 'api response delay for ' + second + ' second.' };
    } else if (ctx.originalUrl.indexOf('/add') > -1) {
        data.push(mockItem(Date.now()));
        ctx.body = { message: 'market added success' };
    } else if (ctx.originalUrl.indexOf('/close') > -1) {
        data[data.length-1].result = 1;
        ctx.body = data[data.length-1];
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