const port = 8081;
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

client.set('result', 0)

app.post('/euclidean', function (req, res) {
    var b=req.number1;
    var a=req.number2;
    var temp;

    while (b != 0) {  
    temp = b;  
      b = a % b;  
      a = temp;  
    }
    
    client.set('result', parseInt(a));   
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
