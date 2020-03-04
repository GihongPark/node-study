/**
 * http 모듈 : 웹 애플리케이션 개발 기능 제공
 *          일반적인 웹서버와 동일하게 동작
 */
var http = require("http");

//파라미터정보를 받기위한 url 모듈
var url = require("url");

// 서버 생성
var server = http.createServer(function(req, res) {
    //res.write("Hello World");

    // 파라미터값 받기
    var q = url.parse(req.url, true);

    //header 정보 보내줄때 사용
    //res.writeHead(200, {"content-type" : "audio/mp3"});   // audio 파일로 인식
    res.writeHead(200, {"content-type" : "text/html"});

    res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'/>");
	res.write("</head>");
    res.write("<body>");

    switch(q.pathname){
        case "/" :
            res.write("<h1>root 입니다</h1>");
            res.write("<a href='test1?data1=111'>test1</a><br/>");
            res.write("<a href='test2?data1=222'>test2</a><br/>");
            break;
        case "/test1" :
            res.write("<h1>test1 입니다</h1>");
            res.write("<h1>data1 : " + q.query.data1 + "<br/>");
            break;
        case "/test2" :
            res.write("<h1>test2 입니다</h1>");
            res.write("<h1>data1 : " + q.query.data1 + "<br/>");
            break;
    }
    res.write("</body");
    res.write("</html>");

    res.end();
});
// 서버실행
server.listen(1234);    // 1234 : 포트번호
console.log("서버실행");

