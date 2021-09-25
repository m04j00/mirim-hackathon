const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '',  // host name  | 기본 : localhost
    user: '', // user name  | 기본 : root
    password: '', //mysql 설치시 설정했던 비번 
    database: '' //db name
});
  
connection.connect((err) => {
    if (err) {
        console.log(err);
        con.end();
        throw err;
    } else {
        console.log("DB 접속 성공");
    }
});


module.exports = connection;