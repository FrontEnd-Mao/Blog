/** 进入所有文章界面直接显示所有的文章*/
module.exports = function (backcall) {
    var connection = require('./connection.js');
    var dateFormat = require('../static/timeFormatConversion.js');
    connecte = connection();
    console.log(typeof connection);
    //连接数据库
    connecte.connect();
    //执行数据操作
    connecte.query(`SELECT id, title, publicationTime, praiseQuantity, views from artical`,
        function (error, results, fields) {
            if (error) throw error;
            else {
               //时间格式转换，拿到的是中国标准时间格式，需要变成yyyy-mm-dd
                results.forEach(item => {
                    item['publicationTime'] = dateFormat(`'${item['publicationTime']}'`);
                })
                console.log(JSON.stringify(results));
                /*因为数据库是异步进行数据访问的，所以需要用到回调函数，当数据访问完成以后，把数据传送出去，如果直接return则
                会出现undefined,因为antd组件的表格需要key属性，所以利用replace(/id/g,'key')将获取到的id属性改为了key*/
                backcall(JSON.stringify(results).replace(/id/g,'key'));
            }
        });
    //关闭连接
    connecte.end();
 
}
