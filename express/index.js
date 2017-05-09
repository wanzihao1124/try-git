// npm 安装了express ，引入第三方库
var express = require('express');
var indexRouter = require('./routes/index');//引入路由模块
var app = express();
var userRouter = require('./routes/users');
var path = require('path');  // 专门处理路径
// 设置模板位置
// 当前位置 __dirname
app.set('views',path.join(__dirname,'views'));
// express API  设置模板引擎的原因是模板中有些变量需要解析，高级的模板语法，快速输入html
app.set('view engine','ejs' );
// 启用路由
app.use('/',indexRouter);
app.use('/users',userRouter);
app.listen(3000);