module.exports = function (itemId, title, artical) {
    var connection = require('./connection.js');
    var dateFormat = require('../static/timeFormatConversion.js');
    connecte = connection();
    console.log(typeof connection);
    //连接数据库
    connecte.connect();
    //执行数据操作
    var myDate = new Date();
	const nowDate = dateFormat(myDate.toLocaleDateString());
    connecte.query(`UPDATE artical SET title='${title}' ,content = '${artical}',modificationTime='${nowDate}'  WHERE id=${itemId};`,
        function (error, results, fields) {
            if (error) throw error;
            else {
                console.log("success")
            }
        });
    //关闭连接
    connecte.end();
}
