const port = 3000;
const keys = require('./keys.js');
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');
const { Pool } = require('pg');


const app = express();
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
});

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

pgClient.on('error', () => console.log('No connection to PG DB'));
pgClient.query('CREATE TABLE IF NOT EXISTS results(number INT)').catch(err => console.log(err));

console.log(keys);

app.post('/send', function(req, res) {
    var b=req.body.number1;
    var a=req.body.number2;
    var temp;

    while (b != 0) {  
      temp = b;  
      b = a % b;  
      a = temp;  
    }
    
    pool.query('INSERT INTO results (number) VALUES (' + a + ')', [a], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Number added with ID: ${result.insertId}`)
    })
    client.set('result', parseInt(a));
    res.send('Obliczenia wykonane!')
  });

  app.get('/take', function (req, res) {
    pool.query('SELECT * FROM results ORDER BY number ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  })
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
