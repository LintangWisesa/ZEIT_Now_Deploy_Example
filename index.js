var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

app.listen(3000, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:3000`)
});

app.get('/', (req, res) => {
    res.send({
        'pesan': 'Selamat datang!'
    });
});

app.post('/', (req, res) => {
    res.send(req.body);
});
