var express = require('express')
var bodyParser = require('body-parser')
var loadArtical = require('./controllers/loadArtical.js');
var getArtical = require('./controllers/getArtical.js');
var delArtical = require('./controllers/delArtical.js');
var getDetailArtical = require('./controllers/getDetailArtical.js');
var updataArticle = require('./controllers/updataArticle.js');
var app = express()

//当以public开头时，去./public/目录中找找对应的资源，第一个参数还可以写成其他的值，相当于别名
// app.use('/public/',express.static('./public/'))
//当没有第一个参数的时候，需要省略public
app.use(express.static('./public/'))

//配置art-template
//express为response对象提供了方法render，render方法默认不可使用，但是如果配置了模板引擎就可以，
//res.render('html模板名',{模板数据})
//第一个参数不能写路径，默认会去views目录查找模板文件，默认吧所有的视图文件放置在views目录中
app.engine('html', require('express-art-template'))

//配置body-parser 中间件（插件，专门获取解析post请求的数据）
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// app.get('/', function(req,res) {
// 	res.render('404.html', {
// 		title:'dsadad'
// 	})
// })

// app.get('/', function (req, res) {
// 	res.setHeader('Access-Control-Allow-Origin', '*')
// 	res.end('Hello express')
// })
app.all('*', function(req, res, next) {
	　　　res.header("Access-Control-Allow-Origin", "*");
			   res.header("Access-Control-Allow-Headers", "X-Requested-With");
			   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
			   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			   res.header("X-Powered-By",' 3.2.1')
			   res.header("Content-Type", "application/json;charset=utf-8");
			   next();
			   });

//登录
app.post('/login', function (req, res) {
	const username = req.body.username;
	const password = req.body.password;
	console.log(username+" "+password)
	if(username == "myy" && password == "199906"){
		res.send(true);
	}
	else {
		res.send(false);
	} 
	
})
//上传文章
app.post('/loadArtical', function (req, res) {
	console.log("文章："+req.body.title, req.body.artical);
	loadArtical(req.body.title, req.body.artical, (flag) => {res.send(flag);console.log(flag)});
})
//获取全部文章
app.post('/getArtical', function (req, res) {
	getArtical((resualt1) => {res.send(resualt1)});
})
//删除文章
app.get('/delArtical', function(req, res) {
	delArtical(req.query.itemId);
	res.send("del success")
})
//获取详细的文章信息
app.post('/getDetailArtical', function (req, res) {
	getDetailArtical(req.body.articalId, (resualt1) => {res.send(resualt1);console.log(resualt1)});
})
//更新文章信息
app.post('/updataArticle', function (req, res) {
	updataArticle(req.body.itemId,req.body.title, req.body.artical);
})
app.listen(3001, function() {
	console.log('app is running')
})