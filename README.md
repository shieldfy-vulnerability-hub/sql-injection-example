# sql injection example

## there is 3 vulnerabilities

1. sql injection in `index.vuln.js` line `12`

```js
connection.query("SELECT * FROM ITEMS WHERE ID=" + req.params.id,(err, result) => {
        res.json(result);
});
```

2. sql injection in `index.vuln.js` line `20`

```js
let query = {
    sql : "SELECT * FROM ITEMS WHERE ID=" + req.params.id
}
connection.query(query,(err, result) => {
    res.json(result);
});
```

2. sql injection in `index.vuln.js` line `24`

```js
connection.query({
    sql : "SELECT * FROM ITEMS WHERE ID=" + req.params.id
},(err, result) => {
    res.json(result);
});
```
