const keys = require('./keys');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort
});

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
});

const taxValue = 23;

pgClient.on('error', () => console.log('No connection to PG DB'));

pgClient.query('CREATE TABLE IF NOT EXISTS results(number DECIMAL)').catch(err => console.log(err));

app.get('/', (req, resp) => {
   resp.send('Brutto -> Netto calculator!');
});

app.post('/result/id', (req, resp) => {
    const salary = req.body.salary;

    redisClient.get(salary, (err, result) => {
        if (!result) {
            let salaryNetto = getNetto(salary);
            redisClient.set(salaryNetto);
            resp.send('New result ' + salaryNetto);
            pgClient.query('INSERT INTO results VALUES ($1)', [salaryNetto]).catch(err => console.log(err));
        }
        else {
            resp.send('Result ' + result);
        }
    });
});

const getNetto = (salary_brutto) => {
    let tax = salary_brutto*taxValue/100+taxValue;
    return salary_brutto-tax;

}


app.get('/results', (req, resp) => {
    pgClient.query('SELECT * FROM results')
        .then(res => resp.send(res.rows))
        .catch(err => console.log(err));
});

app.listen(4000, err => {
    console.log('Server listening on 4000');
});