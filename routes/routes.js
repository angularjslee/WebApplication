/**
 * Created by Administrator on 2020/6/9.
 */
var path = require('path');
var htmlHelper = require('../tool/htmlHelper');

//第一个页面  Action:  /
exports.index = function(req, res){
  res.send('欢迎使用，点击登录 ： <a href="/login">登陆</a>');
};

/*

//系统登录Action   Action:  /login
exports.login = function(req, res){
  res.send("This is Login Action");
};
*/

//进入登录页面
exports.login = function(req, res){
  //res.send("This is Login Action!");
  //path.dirname('aa/bb/cc') => " aa/bb/"
  var filename = path.join(path.dirname(__dirname), '/views/', 'login.html');
  var html = htmlHelper.renderHtml(filename);
  res.send(html);
};


//系统登录Action，即用户登录提交Action  Action:  post /login
exports.dlLogin = function(req, res){
  //res.send("This is doLogin Action!");
  if(req.body.username == "admin" && req.body.password == "123456"){
    //登录成功，跳转页面
    res.redirect('/login_success');
  }else {
    //登录失败，跳转页面
    res.redirect('/login_failed');
  }
};


//获取登录成功界面
exports.loginSuccess = function (req, res) {
  //res.send('This is loginSuccess Action!')
  var filename = path.join(path.dirname(__dirname), '/views/', 'loginSuccess.html');
  var html = htmlHelper.renderHtml(filename);
  res.send(html);
};

//获取登录失败界面
exports.loginFailed = function (req, res) {
  //res.send('This is loginFailed Action!');
  var filename = path.join(path.dirname(__dirname), '/views/', 'loginFailed.html');
  var html = htmlHelper.renderHtml(filename);
  res.send(html);
};

//进入登录页面
exports.login = function(req, res){
  //res.send("This is Login Action!");
  //path.dirname('aa/bb/cc') => " aa/bb/"
  var filename = path.join(path.dirname(__dirname), '/views/', 'login.html');
  var html = htmlHelper.renderHtml(filename);
  res.send(html);
};
