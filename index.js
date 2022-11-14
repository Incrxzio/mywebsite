const express = require('express')
const connection = require('./connect')
const app = express()
const port = 3005
const connect = require('./connect')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hi', (req, res) => {
  res.send('สะหัสฎี')
})

app.get('/users', (req, res) => {
    const query = "SELECT * FROM users";

    connect.query(query, function(error, results) {
        if(error) throw error;
        res.send(results);
    });

})

app.get('/low/:something', (req, res) => {
    const name = req.params.something;
    res.send('สะหัสฎี'+name);
  })

app.get('/sum/:some1/:some2', (req, res) => {
    const num1 = +req.params.some1;
    const num2 = +req.params.some2;
    res.send('ผลรวมของ '+ num1 + "และ " +num2 + " เท่ากับ " + (num1+num2));
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})