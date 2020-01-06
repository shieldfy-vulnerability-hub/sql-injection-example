

const express = require('express')
const database = require('./db');
const connection = null;
const app = express()
const port = 3000


const NoVulnerability1 = (req, res) => {
    connection.query("SELECT * FROM ITEMS WHERE ID=?",[req.params.id],(err, result) => {
        res.json(result);
    });
}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/no-vuln/:id', NoVulnerability1);

(async() => {
    connection = await database();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})();

