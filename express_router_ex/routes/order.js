const express=require('express');
const router = express.Router();

router.get('/cart',(req,res)=>{
	return res.send('장바구니');
});0

router.get('/process',(req,res)=>{
	return res.send('주문서 페이지');
});

router.get('/done',(req,res)=>{
	return res.send('주문완료 페이지');
});

module.exports = router;