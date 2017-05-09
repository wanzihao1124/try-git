var express = require('express');
// 产出一个路由
var router = express.Router();
// .get 访问的方法
router.get('/',function(req,res){
    // 渲染html
    res.render('index',{});
    // res.send('hello,express');
});
module.exports = router;