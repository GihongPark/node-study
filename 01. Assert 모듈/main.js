/**
 * Assert 모듈
 *  개발자가 만든 코드가 동작하기 전에 데이터나 수식에 대한 검사를 할 수 있는 모듈
 *  모듈에서 제공하는 함수들을 이용하여 검사할 때 위배가 될 경우 오류가 발생하고 프로그램을 중지한다
 */

 var assert = require('assert');

 // assert : 주어진 변수가 수식의 값이 0이거나 false인 경우 오류 발생
 var v1 = 10,
    v2 = 10,
    v3 = 20,
    v4 = "10";

assert(v1 < v3);
console.log("v1은 v3보다 작다");

// assert(v1 == v3);
// console.log("v1은 v3과 같다");

assert(v1 == v2);
console.log("v1은 v2과 같다");

// equal : 주어진 변수나 수식의 결과 값이 다를 경우 오류 발생, 값의 타입은 무시
// strictEqual : 값의 타입도 검사
assert.equal(v1, v2);
console.log("v1과 v2는 같다")

// assert.equal(v1, v3);
// console.log("v1과 v3는 같다")

assert.equal(v1, v4);
console.log("v1과 v4는 같다")
// assert.strictEqual(v1, v4);
// console.log("v1과 v4는 같다")

// notEqual : 주어진 변수나 수식의 결과 값이 같을 경우 오류 발생, 값의 타입 무시
// notStrictEqual : 값의 타입도 검사
// assert.notEqual(v1, v4);
// console.log("v1과 v4는 같다")
assert.notStrictEqual(v1, v4);
console.log("v1과 v4는 같다")

// deepEqual : 두 객체의 멤버가 동일하지 않을 경우 오류 발생, 타입 무시
// deepStrictEqual : 타입 검사
// notDeepEqual : 동일할 경우 오류 발생, 타입 무시
// notDeepStrictEqual : 타입 검사
var obj1 = {
    a1 : 10,
    a2 : 20
}
var obj2 = {
    a1 : 10,
    a2 : 20
}
var obj3 = {
    a1 : 10,
    a2 : 30
}
var obj4 = {
    a1 : 10,
    a2 : '20'
}

assert.deepEqual(obj1, obj2);
console.log("obj1과 obj2는 같습니다");
// assert.deepEqual(obj1, obj3);
// console.log("obj1과 obj3는 같습니다");
assert.deepEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다");
// assert.deepStrictEqual(obj1, obj4);
// console.log("obj1과 obj4는 같습니다");

// assert.notDeepEqual(obj1, obj2);
// console.log("obj1과 obj2는 다릅니다");
assert.notDeepEqual(obj1, obj3);
console.log("obj1과 obj3는 다릅니다");
// assert.notDeepEqual(obj1, obj4);
// console.log("obj1과 obj4는 다릅니다");
assert.notStrictDeepEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다");