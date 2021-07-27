const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const app = express();

dotenv.config();

app.set('PORT',process.env.PORT||3000);

app.use(morgan('dev'));

// 정적 페이지 설정
//app.use('/images',express.static(path.join(__dirname,"images")));
//app.use('/',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,"public")));

// 기본페이지
app.get('/',(req,res)=>{
	return res.send('<h1>기본페이지</h1>');
});

// 없는 페이지 라우터
app.use((req,res,next)=>{
	const err = new Error(`${req.url}은 없는 페이지 입니다`);
	err.status = 404;
	next(err);
});

// 오류 처리 라우터
app.use((err,req,res,next)=>{
	return res.status(err.status||500).send(err.message);
});
app.listen(app.get('PORT'),()=>{
		console.log(app.get('PORT'),'번 포트에서 서버 대기중..');
});
