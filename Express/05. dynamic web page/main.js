var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", ejs);
app.engine("ejs", ejs.renderFile);  // ejs 파일 사용

var controller = require("./router/controller")(app);

var server = app.listen(2000, function() {
    console.log("서버 실행");
})