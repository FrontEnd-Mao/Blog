

module.exports = function () {
  var mysql = require('mysql');
  //创建连接
  var user = {};
  var connection = mysql.createConnection({
    host: '118.31.247.240',
    user: 'root',
    password: '199906',
    database: 'blog',
    prot: 3306
  });
  //连接数据库
  connection.connect();

  //执行数据操作
  connection.query('SELECT * FROM `user`', function (error, results, fields) {
    if (error) throw error;
    user = results[0];

  });

  //关闭连接
  connection.end();
  console.log('获取用户信息');
  return user;
}