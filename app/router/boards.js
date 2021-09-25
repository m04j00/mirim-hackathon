const express = require('express');
const router = express();
const connection = require('../mysql');

router.use(express.urlencoded({
    extended: false
})); //application/x-www-form-urlencoded
router.use(express.json());

// CREATE 
router.post('/', function (req, res) {
    let title = req.body.title; //requst body 'title'로 넘어온 값을 title 변수에 저장
    let description = req.body.description; //requst body 'description'으로 넘어온 값을 description 변수에 저장
 
    let sql = 'INSERT INTO board (title, description) VALUES(?, ?);';
    //sql insert 구문, title, description에 body로 넘어온 값을 ? 자리에 넣는다.
    let params = [title, description];
    //params로 insert에 넣을 값을 배열화한다.
    
    //첫번째 인자 : sql 구문
    //두번째 인자 : ? 자리에 들어갈 파라미터 전달값 
    // function의 result : 반환값
    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log(err); // 에러 발생 시 콘솔에 찍힘 (없으면 왜 오류났는지 모름)
            return res.sendStatus(400); // 400 반환
        }
        res.json(req.body); // 받은 값 반환
        console.log("result : " + JSON.stringify(req.body)); 
    });
})

// READ
router.get('/', function(req,res){
    let sql = 'select * from board;'; //sql 구문
    
    //첫번째 인자 : sql 구문
    //function - result : sql문에 따른 반환 데이터
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.json(result);
        console.log("result : " + JSON.stringify(result));
    });
})

// UPDATE
router.post('/:id', function(req, res){
    let id = req.params.id; // 파라미터로 받음 id값, 게시글의 고유 번호이다.
    let title = req.body.title; // 변경된 타이틀을 body로 가져온다. 
    let description = req.body.description; // 변경된 내용물을 body로 가져온다. 

    let sql = 'UPDATE board SET title = ?, description=? WHERE id = ?'; // update sql 구문
    let params = [title, description, id]; // 위 구문 물음표 순서대로 값을 넣어준다. 

    connection.query(sql, params, function (err, result) {
        if(err) console.log(err);
        if(params[0].length == 0 || params[1].length == 0){
            return res.send('값을 다 채워주세요.');
        }
        res.json(req.body);
        console.log(result);
    });
})

// DELETE
router.delete('/:id', function(req, res){
    let id = req.params.id; // 파라미터로 받음 id값, 게시글의 고유 번호이다.

    let sql = 'DELETE from board where id = ?'; // delete sql 구문
    connection.query(sql, id, function (err, result) {
        if(err) console.log(err);
        res.send('삭제되었습니다.');
        console.log(result);
    });
})
module.exports = router;