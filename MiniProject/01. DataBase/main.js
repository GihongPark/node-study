var mysql = require("mysql");

// 데이터베이스에 접속하기 위한 정보를 가지고 있는 객체
var conn_info = {
    host : "localhost",     // 접속주소
    port : "3306",          // 포트번호
    user : "root",          // 아이디
    password : "1234",  // 비밀번호
    database : "TestDB"     // 데이터베이스 이름
};

var conn = mysql.createConnection(conn_info);
conn.connect(function(err) {
    if(err) {
        console.log("접속 오류", err);
        
        // Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
        // mysql 8버전부터 authentication 방식이 변경되어 authentication 설정을 바까야함
        // docker run -d --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql --default-authentication-plugin=mysql_native_password
        // 참고) https://xn--lg3bt3ss6d.com/25
    } else {
        console.log("접속 성공");

        /*
        var sql = "insert into TestTable (int_data, str_data) values (?, ?)";
        
        var input_data1 = [100, "문자열1"];
        conn.query(sql, input_data1, function(err) {
            console.log("저장완료 1");
        });
        
        var input_data2 = [200, "문자열2"];
        conn.query(sql, input_data2, function(err) {
            console.log("저장완료 2");
        });

        var input_data3 = [300, "문자열3"];
        conn.query(sql, input_data3, function(err) {
            console.log("저장완료 3");
        });
        */

        /*
        var sql = "update TestTable set str_data=? where int_data=?";
        var update_data = ["문자열100", 100];
        conn.query(sql, update_data, function(err) {
            console.log("수정 완료");
        });
        */

        var sql = "delete from TestTable where int_data=?";
        var delete_data = [100];
        conn.query(sql, delete_data, function(err) {
            console.log("삭제 완료");
        })

        var sql2 = "select * from TestTable";
        conn.query(sql2, function(err, rows) {
            for(var obj of rows) {
                console.log("int_data : ", obj.int_data);
                console.log("str_data : :", obj.str_data);
            }
        });

        conn.end();
    }
});
