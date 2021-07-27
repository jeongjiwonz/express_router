const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');

const boardRouter = require('./routes/board');

dotenv.config();

app.set('view engine','html'); // 1. 템플릿 엔진 사용, 2. 템플릿 파일의 확장자
nunjucks.configure(path.join(__dirname,'views'),{
	express : app,
	watch :true,
});

app.use(morgan('dev'));

app.set('PORT',process.env.PORT||3000);

app.use(express.static(path.join(__dirname,'public')));

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// 라우터
app.use('/board',boardRouter);

app.use((req,res,next)=>{
	console.log('페이지 없음')
	const err = new Error(`${req.url}을 찾을수 없습니다.`);
	err.status=404;
	next(err);
});

app.use((err,req,res,next)=>{
	return res.status(err.status||500).send(err.message);
	next();
});

app.listen(app.get('PORT'),()=>{
	console.log(app.get('PORT'),'번 포트에서 대기중')
});