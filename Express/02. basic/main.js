/**
 * express 모듈
 */
var express = require("express");

// express : express 모듈에서 제공하는 기능을 사용할 수 있는 객체
var app = express();

// get : get 방식으로 요청이 발생했을 때 호출
app.get("/", function(req, res) {
    res.send("Root");
});
app.get("/get", function(req, res) {
    res.send("get");
})

// post : post 방식으로 요청이 발생했을 때 호출
app.post("/post", function(req, res) {
    res.send("post")
});

// listen : 서버 실행
var serve = app.listen(2000, function() {
    console.log("서버가동");
});

