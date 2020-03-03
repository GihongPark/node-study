/**
 * fs 모듈 : 파일에 데이터를 읽고 쓸 수 있는 기능 제공
 */

// 비동기식
// writeFile : 데이터를 쓰기. 파일이 없으면 새로만들기, 있으면 기존데이터를 삭제 후 쓰기
// appendFile : 기존 데이터 뒤에 추가로 쓰기
// readFile : 파일 데이터 읽어오기

// 동기식
// writeFileSync : 데이터 쓰기
// appendFileSync : 추기로 쓰기

var fs = require("fs");

// fs.writeFile("data1.txt", "Hello node.js", function(err){
//     console.log("비동기식 저장1");
// })

// fs.appendFile("data1.txt", "안녕하세요", function(err){
//     console.log("비동기식 추가1");
// });

// fs.readFile("data1.txt", function(err, data){
//     console.log(data.toString());
// });

fs.writeFileSync("data2.txt", "Hello node.js");
console.log("동기식 저장1");

fs.appendFileSync("data2.txt", "안녕하세요"); 
console.log("동기식 추가1");

var data = fs.readFileSync("data2.txt");
console.log(data.toString());