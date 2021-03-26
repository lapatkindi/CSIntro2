// server.js
const express = require('express');
const fs =  require('fs-extra');
const qs =  require('qs');
// require('body-parser');
const app  = express();
const port = 8000;

//require('./app/routes')(app, {});

app.get('/', (req, res) => {
    res.send('Go to <a href="/records">records</a>');

});

app.get('/records', (req, res) => {
    const data = fs.readFileSync("./sampleData.json");
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
   
    res.send(data);
});

app.post('/records', (req, res) => {
    console.log(req.query);
    let answer;
    
    // TODO: проверка пришедших данных и запись в файл
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(answer);
});


app.listen(port, () => {
  console.log('We are live on ' + port);
});