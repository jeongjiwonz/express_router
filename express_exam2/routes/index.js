const express=require('express');
const router=express.Router();

// 메인 페이지
router.get('/',(req,res)=>{
	const data={
		addCss:["main.css","main2.css"],
		addScript["main.js","main2.js"],
		pageTime:'변경된 사이트 제목 ',
		}
	return res.render('main/index');
});

module.exports=router;