const express = require('express');
const app = express();
  
//ejs
app.set('view engine','ejs'); 
app.use(express.static(__dirname + '/public'));
const boardRouter = require('./router/boards');
app.use('/boards', boardRouter);

app.get('/', function(req, res){
    res.send('2021 Mirim Tech Talk Hackathon');
})
app.listen(3000, () => console.log('3000번 포트 대기'));

