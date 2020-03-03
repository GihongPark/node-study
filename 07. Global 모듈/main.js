/**
 * Global 모듈 : 모듈을 생성하지 않고 사용할수 있는 것들을 모아둔 객체
 */

// Buffer : 메모리를 동적 할당

// __dirname : 현재 실행중인 파일의 경로
console.log("__dirname : ", __dirname);
// __filename : 현재 실행중인 파일의 경로와 파일명
console.log("__filename : ", __filename);

// setImmediate : 하나의 사건처리가 끝나면 동작할 코드 등록
// clearImmediate : 등록된 Immediate 제거
console.log("작업 중~");
setImmediate(function() {
    console.log("Immediate 동작1");
})
console.log("작업 중~");
console.log("작업 중~");
var a1 = setImmediate(function() {
    console.log("Immediate 동작2");
})
console.log("작업 중~");
clearImmediate(a1);

console.log("작업 완료!");

// setInterval : 주어진 함수를 시간마다 계속 호출
// clearInterval : interval 제거
var i1 = 0;
var i2 = setInterval(function(){
    console.log("Interval 동작");
    i1++;
    console.log("i : ", i1);
    if(i1 >= 5) {
        clearInterval(i2);
    }
}, 1000);

// setTimeout : 주어진 시간 후 한번 호출
// clearTimeout : timeout 제거
var s1 = setTimeout(function(){
    console.log("Timeout 동작");
}, 1000);
clearTimeout(s1);

// exports : 모듈을 만들때 사용
// require : 모듈 객체 생성

