/**
 * DNS 모듈 : 지정된 도메인의 dns 정보(ip주소 등)를 알아올 수 있는 모듈
 * lookup : 지정된 도메인의 정보를 가져옴
 */
var dns = require("dns");

dns.lookup("google.com", function(err, address, family){ 
    console.log("IP 주소 : ", address);
    console.log("IP 버전 : ", family)
}); 

var op1 = {
    family: 4
}
dns.lookup("google.com", op1, function(err, address, family){
    console.log("IPv4 : ", address);
});

var op2 = {
    family: 6
}
dns.lookup("google.com", op2, function(err, address, family){
    console.log("IPv6 : ", address);
});


