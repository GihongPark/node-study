/**
 * OS 모듈 : node.js 프로그램이 실행되고 잇는 서버 컴퓨터와 관련된 정보 제공
 */
var os = require("os");

// cpu 정보
// arch : CPU 아키텍쳐 정보 반환
console.log("arch : ", os.arch());
// cpus : 컴퓨터 CPU 정보 반환
console.log("cpus : ", os.cpus());
// totalmem : 총 메모리양 반환
console.log("totalmem : ", os.totalmem());
// freemem : 여유 메모리양 반환
console.log("freemem : ", os.freemem());
// hostname : 컴퓨터 호스트 이름 반환
console.log("hostname : ", os.hostname());

// 네트워크 인터페이스
// networkInterfaces : 컴퓨터에 장착된 통신 장비들 정보 반환
console.log("networkInterfaces : ", os.networkInterfaces());
// platform : 실행 플랫폼 정보 반환
console.log("platform : ", os.platform());
// release : 버전 정보 반환
console.log("release : ", os.release());
// tmpdir : 임시 파일 경로 반환
console.log("tmpdir : ", os.tmpdir());
// type : 실행OS 이름 반환
console.log("type : ", os.type());
// uptime : 컴퓨터 동작 시간
console.log("uptime : ", os.uptime());

// 사용자 정보
// userInfo : 사용자 정보 반환
console.log("userInfo : ", os.userInfo());


