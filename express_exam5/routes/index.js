const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	return res.send('메인페이지');
});

module.exports=router;