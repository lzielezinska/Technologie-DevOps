const port = 8081;
const express = require('express');
const redis = require('redis');
const bodyParser = require('body-parser');


const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

client.set('result', 0)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/send', function(req, res) {
    var b=req.body.number1;
    var a=req.body.number2;
    var temp;

    while (b != 0) {  
      temp = b;  
      b = a % b;  
      a = temp;  
    }
    client.set('result', parseInt(a));
    res.send('Obliczenia wykonane!')
  });

  app.get('/take', function (req, res) {
    client.get('result', redis.print);
  })
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
