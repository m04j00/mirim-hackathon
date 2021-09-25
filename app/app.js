const express = require('express');
const app = express();
  
const boardRouter = require('./router/board');
app.use('/board', boardRouter);

app.get('/', function(req, res){
    res.send('2021 Mirim Tech Talk Hackathon');
})
app.listen(3000, () => console.log('3000번 포트 대기'));

