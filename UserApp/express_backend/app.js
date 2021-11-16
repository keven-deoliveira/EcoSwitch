const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: '96.230.29.89',
    user: 'admin',
    password: 'password12',
    database: 'ecoswitch'
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/api/get', (req, res) => {
    const sqlQuery = 'SELECT TempRecent_Call(\'123456\') AS \`TempRecent_Call\`;'
    db.query(sqlQuery, (err, result) =>{
        const jsonResult = JSON.parse(result[0].TempRecent_Call)
        console.log('Temp:', jsonResult['Temp'])
        console.log('Humidity:', jsonResult['Humidity'])
        res.send(jsonResult);
    })
});

app.listen(8081, () => {
    console.log('running on port 8081')
});