const express = require('express');
const router = express();
const connection = require('../mysql');

router.use(express.urlencoded({
    extended: false
})); //application/x-www-form-urlencoded
router.use(express.json());

router.post('/', function (req, res) {
    let title = req.query.title;
    let description = req.query.description;
    let params = [title, description];

    let sql = 'INSERT into board (title, description) VALUES(?, ?);';

    connection.query(sql, params, function (err, result) {
        if (err) return res.sendStatus(400);

        res.json(result);
        console.log("result : " + JSON.stringify(result));
    });
})
module.exports = router;