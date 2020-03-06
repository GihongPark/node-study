/**
 * 라우팅 : 사용자 요청에 따라 응답 결과 전달
 */
var express = require("express");
var app = express();
var controller1 = require("./router/controller1")(app);
var controller2 = require("./router/controller2")(app);
/*
app.get("/", function(req, res) {
    res.send("Root");
})
app.get("/test1", function(req, res) {
    res.send("test1");
})
*/

var server = app.listen(2000, function() {
    console.log("서버 가동");
})