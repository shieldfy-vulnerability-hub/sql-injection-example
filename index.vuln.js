
const express = require('express')
const database = require('./db');
const connection = null;
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))


const Vulnerability = (req, res) => {
    connection.query("SELECT * FROM ITEMS WHERE ID=" + req.params.id,(err, result) => {
        res.json(result);
    });


    let query = {
        sql : "SELECT * FROM ITEMS WHERE ID=" + req.params.id
    }
    connection.query(query,(err, result) => {
        res.json(result);
    });

    connection.query({
        sql : "SELECT * FROM ITEMS WHERE ID=" + req.params.id
    },(err, result) => {
        res.json(result);
    });
}



app.get('/vuln/:id', Vulnerability);


(async() => {
    connection = await database();
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})();