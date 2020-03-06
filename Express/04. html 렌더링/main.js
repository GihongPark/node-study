var express = require("express");
var ejs = require("ejs");

var app = express();

//  
app.set("views", __dirname + "/views");   // __dirname 현재 실행중인 js파일 위치(main.js파일 위치)
app.set("view engine", ejs);            // 렌더링할 때 사용할 엔진
app.engine("html", ejs.renderFile);     // html파일을 이용할때 사용할 엔진 객체

app.use(express.static(__dirname + "/public"));  // 정적 파일 사용하기 (html에서 다른파일 가져다 쓰기 위해)

var controller = require("./router/controller")(app);

var server = app.listen(2000, function() {
    console.log("서버 실행");
})