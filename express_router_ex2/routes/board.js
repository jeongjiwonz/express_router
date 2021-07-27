const express = require('express');
const router = express.Router();

router.get('/list/:boardId',(req,res)=>{
	const data={
						boardId:req.params.boardId,
						list : ['apple','orange','mango'],
						city:'인천',
						isLogin:true,
						htmlData :'<h1> HTML 출력 테스트 </h1>',
					};
	return res.render('board/list',data);
});

router.get('/view/:num',(req,res)=>{
	return res.send('게시글 번호 - ' + req.params.num);
});

router.route('/write')
.get((req,res)=>{
	
})
.post((req,res)=>{
	
})
.patch((req,res)=>{
	
})
.delete((req,res)=>{
	
});

module.exports = router;