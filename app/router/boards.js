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
        if (err) {
            console.log(err);
            return res.sendStatus(400);
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
module.exports = router;