var express = require("express");
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", ejs);
app.engine("ejs", ejs.renderFile);  // ejs 파일 사용
app.use(cookieParser());
app.use(session({
    secret : "abcdefg", // 암호화(문자열은 자유롭게 입력)
    resave : false, // session 재저장 유무
    saveUninitialized : true, // 초기화 값 저장 유무
}));

var controller = require("./router/controller")(app);

var server = app.listen(2000, function() {
    console.log("서버 실행");
})