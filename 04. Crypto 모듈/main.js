/**
 * Crypto 모듈 : 데이터 암호화 기능을 제공 하는 모듈
 */
var crypto = require("crypto");

// getCiphers : 지원하는 암호화 알고리즘의 이름들을 반환
var ciphers = crypto.getCiphers();

// for (var i of ciphers) {
//     console.log(i);
// }

// createCipher : 암호화용 객체를 생성
// createDecipher : 복호화용 객체를 생성
// update : 데이터를 암호화 하거나 복호화
// final : 암호화된 데이터에 마지막 종료 블럭 추가

// 암호화
var key = "test key";
var data = "암호화 할 데이터";
 
var cipher = crypto.createCipher("aes-256-cbc", key);
var result = cipher.update(data, "utf8", "base64");
result += cipher.final("base64");

console.log("암호화 문자열: ", result);

// 복호화
var decipher = crypto.createDecipher("aes-256-cbc", key);
var result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");

console.log("복호화 문자열: ", result2);
