module.exports = function (itemId) {

    var connection = require('./connection.js');
    connecte = connection();
    //连接数据库
    connecte.connect();
    //执行数据操作
    
    connecte.query(`DELETE FROM artical WHERE id = ${itemId};`,
        function (error) {
            if (error) throw error;
            else {
                console.log("del success")
            }
        });
    //关闭连接
    connecte.end();
}
