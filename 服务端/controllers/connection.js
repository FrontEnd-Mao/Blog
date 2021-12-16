module.exports = function () {
    var mysql = require('mysql');
    //创建连接
    var connection = mysql.createConnection({
        host: '118.31.247.240',
        user: 'root',
        password: '199906',
        database: 'blog',
        prot: 3306
    });
    return connection;
}