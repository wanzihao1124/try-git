var express = require('express');
var router = express.Router();

router.get('/:name',function(req,res){
    // req是请求对象 params 查询参数
    res.send('hello,'+ req.params.name);
});

module.exports = router;