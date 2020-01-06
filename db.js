var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret'
});
 
module.exports = () => {
    return new Promise((resolve,reject) => {
        connection.connect(function(err) {
            if (err) {
                reject(err);
                console.error('error connecting: ' + err.stack);
                return;
            }
            resolve(connection);
            //console.log('connected as id ' + connection.threadId);
        });
    }) 
}