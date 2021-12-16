
module.exports = function (itemId, backcall) {
    var connection = require('./connection.js');
    connecte = connection();
    console.log(typeof connection);
    //连接数据库
    connecte.connect();
    //执行数据操作
    connecte.query(`SELECT title,content from artical where id = ${itemId}`,
        function (error, results, fields) {
            if (error) throw error;
            else {
                /*因为数据库是异步进行数据访问的，所以需要用到回调函数，当数据访问完成以后，把数据传送出去，如果直接return则
                会出现undefined,因为antd组件的表格需要key属性，所以利用replace(/id/g,'key')将获取到的id属性改为了key*/
                console.log(itemId)
                backcall(JSON.stringify(results).replace(/id/g,'key'));
            }
        });
    //关闭连接
    connecte.end();
    }