const express = require('express');
const router = express();
const connection = require('../mysql');

router.use(express.urlencoded({
    extended: false
})); //application/x-www-form-urlencoded
router.use(express.json());

router.post('/', function (req, res) {
    let title = req.body.title;
    let description = req.body.description;
    let params = [title, description];
    //console.log(params);
    let sql = 'INSERT INTO board (title, description) VALUES(?, ?);';

    connection.query(sql, params, function (err, result) {
        if(params[0].length == 0 || params[1].length == 0){
            return res.send('값을 다 채워주세요.');
        }
        res.json(req.body);
        console.log("result : " + JSON.stringify(req.body));
    });
})
router.get('/', function(req,res){
    let sql = 'select * from board;';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }
        res.json(result);
        console.log("result : " + JSON.stringify(result));
    });
})
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
module.exports = router;