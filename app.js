/**
 * Created by Administrator on 2020/6/9.
 */
var bodyParser = require('body-parser');
//1、导入模块
var http = require('http'),
    express = require('express'),
    app = express(),
    routes = require('./routes/routes');

//2、设置环境变量
app.set('port', process.env.PORT||8001);

//3.加入报文处理中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//4 设置路由，处理请求
app.get('/', routes.index);

//3、服务器启动
http.createServer(app).listen(app.get('port'), function(){
  console.log('服务器已启动， 监听端口: %s', app.get('port'));
});

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.dlLogin);
app.get('/login_success', routes.loginSuccess);
app.get('/login_failed', routes.loginFailed);


