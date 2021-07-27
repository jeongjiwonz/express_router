const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
	return res.send('상품목록');
});

router.get('/view',(req,res)=>{
	return res.send('상품상세정보');
});

module.exports = router;