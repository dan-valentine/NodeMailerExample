require('dotenv').config();

const express = require('express'), 
  bodyParser = require('body-parser'), 
  emailCtrl = require('./controllers/emailCtrl'), 
  app = express(), 
  {SERVER_PORT} = process.env;

app.use(bodyParser.json())

app.get('/api/helloworld', (req, res) =>{
  res.send('Hello World');
});

app.post('/api/send', emailCtrl.send);

app.listen(SERVER_PORT, ()=>{
    console.log(`What up! I'm port ${SERVER_PORT}`);
});