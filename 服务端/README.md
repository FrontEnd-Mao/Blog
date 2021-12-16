### 初始化包 
`npm init`
`npm install` 
### npm安装express 
`npm i express`
### npm安装express-art-template
`npm i express-art-template`
### npm安装art-template
`npm i art-template`
### npm安装mysql
`npm i mysql`
### mysql文件连接
> var mysql = require('mysql');
//创建连接
var user;
var connection = mysql.createConnection({
  host     : '118.31.247.240',
  user     : 'root',
  password : '199906',
  database : 'user',
  prot:3306
});
 //连接数据库
connection.connect();
 
//执行数据操作
connection.query('SELECT * FROM `user`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  user = results;
});

//关闭连接
connection.end();

module.exports = function() {
  console.log('获取用户信息');
  return user;
}