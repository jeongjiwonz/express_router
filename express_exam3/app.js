const express = require('express');
const middle1 = require('./middleware/middle1');
//const middle2 = require('./middleware/middle2');
//const {joinValidator, loginValidator} = requireE('./middleware/middle2');
const middle3 = require('./middleware/middle3');

const app =express();

//app.use(middle1);
//app.use(joinValidator);
//app.use(loginValidator);
app.use(middle3('인수1'));
app.use(middle3('인수2'));
app.use(middle3('인수3'));

app.get('/',(req,res,next)=>{
	console.log('1번째');
	next();
});
app.use()
app.get('/',(req,res,next)=>{
	console.log('2번째');
	next();
});

app.get('/',(req,res)=>{
	console.log('3번째');
	return res.send('마지맋 메이,ㄴ 라우터');
});

app.listen(3000,()=>{
	console.log('3000번 포트에서 서버 대기중...');
});