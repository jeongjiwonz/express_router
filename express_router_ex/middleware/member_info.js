// 미들웨어 방식 1

module.exports = ((req,res,next)=>{
	console.log('memberInfo 미들웨어 호출');
	next();
});