/**
 * Buffer 모듈은 기억공간을 동적으로 만들 때 사용
 *  개발자가 원하는 사이즈의 메모리 공간을 사용하고자 할때 사용
 *  따로 모듈 등록하지않고 사용
 */

 // alloc : 지정된 바이트 만큼 기억공간이 만들어지고 0으로 초기화된다.
 var buf1 = Buffer.alloc(10);
 console.log(buf1);

 // allocUnsafe : 0으로 초기화되지않는다
 //               alloc에 비해 속도가 빠르다 - 바로 데이터를 넣을 경우 alloc보다 유리
 var buf2 = Buffer.allocUnsafe(10);
 console.log(buf2);

 // byteLength : 버퍼의 용량을 반환
 // length : 버퍼의 용량을 반환
 var size1 = Buffer.byteLength(buf1);
 console.log(size1);
 console.log(buf1.length);

 // from : 지정된 값을 관리하는 기억공간을 만듦
 var buf3 = Buffer.from("abcd");
 var buf4 = Buffer.from("안녕하세요");
 console.log(buf3);
 console.log(buf4);

 // compare : 두 기억공간을 비교 ( 같으면 0, 첫번째 버퍼가 크면 1, 작으면 -1)
 var buf5 = Buffer.from("ccc");
 var buf6 = Buffer.from("ccc");
 var buf7 = Buffer.from("aaa");
 var buf8 = Buffer.from("ddd");

 var v1 = Buffer.compare(buf5, buf6);
 console.log(v1);
 var v2 = Buffer.compare(buf5, buf7);
 console.log(v2);
 var v3 = Buffer.compare(buf5, buf8);
 console.log(v3);

 // concat : 배열안에 있는 모든 버퍼를 하나로 합쳐 새로운 버퍼로 만듦
 var arr = [buf5, buf6, buf7, buf8];
 var buf9 = Buffer.concat(arr)
 console.log(buf9)

 // copy : 버퍼의 내용을 다른 버퍼에 복사
 var buf10 = Buffer.from('123456789');
 var buf11 = Buffer.alloc(10);
 buf10.copy(buf11, 0, 2, 5);

 // entries : 버퍼의 내용을 [인덱스, 값] 형태의 객체로 만들어 가지고 있는 배열을 반환
 var arr2 = buf5.entries();
 for( var str of arr2) {
     console.log(str);
 }

 // equals : 두 버퍼의 내용이 같은지 비교
 var v4 = buf5.equals(buf6)
 console.log(v4)
 var v5 = buf5.equals(buf7)
 console.log(v5)

 // fill : 버퍼에 지정된 값을 채움
 var buf12 = Buffer.from('aaaaaa');
 console.log(buf12);
 buf12.fill('c');
 console.log(buf12);
 buf12.fill('abc');
 console.log(buf12);

 // includes : 버퍼에 지정된 값이 있는지 확인
 var buf13 = Buffer.from('hello node.js');
 var v6 = buf13.includes('node');
 console.log("v6: ", v6);
 var v7 = buf13.includes('java');
 console.log("v7: ", v7);

 // indexOf : 버퍼에 지정된 값의 위치를 반환 ( 값이 없으면 -1 반환 )
 var v8 = buf13.indexOf("node");
 console.log("v8: ", v8);
 var v9 = buf13.indexOf("java");
 console.log("v9: ", v9);

 // lastIndexOf : 버퍼에 지정된 값의 위치를 뒤에서 부터 반환 ( 값이 없으면 -1 반환 )
 var v10 = buf13.lastIndexOf("node");
 console.log("v10: ", v10);

 // isBuffer : 지정된 객체가 버퍼 객체인지 확인
 var v11 = Buffer.isBuffer(buf13);
 console.log("v11: ", v11);

 var obj = {
     a1: 10
 }
 var v12 = Buffer.isBuffer(obj);
 console.log("v12 : ", v12);

 // keys : 버퍼에 저장된 객체의 인덱스를 가져옴
 var arr3 = buf13.keys();
 for(var i of arr){
     console.log(i);
 }

 // toString : 버퍼에 저장된 값을 문자열로 가져옴
 var v13 = buf13.toString();
 console.log("v13: ", v13);