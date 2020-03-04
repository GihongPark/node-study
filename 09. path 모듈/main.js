/**
 * path 모듈 : 경로에 관련된 기능 제공
 */
var path = require("path");

// 경로에서 파일 이름 가져오기
var basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1 : ", basename1);  // 윈도우전용
var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 : ", basename2);  // 모두다
var basename3 = path.basename("abc.txt");
console.log("basename3 : " , basename3);

// 경로 알아내기
var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 : ", dirname1);
var dirname2 = path.dirname("abc.txt");
console.log("dirname2 : ", dirname2);

// 파일 확장자 가져오기
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname : ", extname1);
var extname2 = path.extname("abc.txt");
console.log("extname : ", extname2);

// 절대경로인지 판단
var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");
var isAbsolute2 = path.isAbsolute("abc.txt");
console.log("isAbsolute1 : ", isAbsolute1);
console.log("isAbsolute2 : ", isAbsolute2);

// 주어진 문자열을 합쳐서 경로로 만들기
var join = path.join("aaa", "bbb", "ccc.txt");
console.log("join : ", join);

// 경로 정리
var normalize = path.normalize("c:/aaa/../bbb/ccc.txt");    // aaa의 상위폴더에서 bbb의 ccc.txt
console.log("normalize : ", normalize);


