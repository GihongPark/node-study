/**
 * main.js
 */

var second = require("./seconds.js");   // 모듈을 호출하기 위해서는 require 함수를 이용한다.

console.log("Hello World");

var a1 = 100;
var a2 = "문자열1";

console.log("a1: %d, a2: %s", a1, a2);

console.log("a1:", a1, ", a2:", a2);

/**
 * 모듈 : 자주 사용하는 함수의 경우 별도의 js파일로 만들어 주면 된다
 *        이는 하나의 객체 단위로 생각하면 된다
 *        exports 객체에 필요한 함수를 추가한다
 */

 function f1() {
     console.log("f1 함수 호출");
 }

 f1();
 second.f2();
