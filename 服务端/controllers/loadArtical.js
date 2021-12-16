function renderTime(date) {
    var dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
  }
module.exports = function (title, artical, callback) {
    let flag= false;
    var connection = require('./connection.js');
    var dateFormat = require('../static/timeFormatConversion.js');
    connecte = connection();
    console.log(typeof connection);
    //连接数据库
    connecte.connect();
    //执行数据操作
    var myDate = new Date();
	const nowDate = dateFormat(myDate.toLocaleDateString());
    connecte.query(`INSERT INTO artical (title, content, publicationTime, modificationTime, praiseQuantity,views, closeComments)  VALUES ('${title}', '${artical}','${nowDate}','${nowDate}',0,0,false)`,
        function (error, results, fields) {
            if (error) {
                callback(false);
                throw error;
            } 
            else {
                console.log("上传文章成功---success");
                callback(true);
            }
        });
    //关闭连接
    connecte.end();
    console.log('flage的值：' + flag);
    return flag;
}
