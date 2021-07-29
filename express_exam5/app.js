const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const path = require('path');
const mainRouter = require('./routes');
const logger = require('./lib/logger.js');

const app = express();

dotenv.config();

// nunjucks
app.set('view engine','html');
nunjucks.configure(path.join(__dirname,'view'),{
	express:app,
	watch:true,
});

app.set('PORT',process.env.PORT||3000);

app.use(morgan('dev'));
// 정적 페이지
app.use(express.static(path.join(__dirname,'public')));

// body-parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use(mainRouter);

// 없는 페이지
app.use((req,res,next)=>{
	const err = new Error(`${req.url}은 없는 페이지 입니다.`);
	err.status=404;
	
	next(err);
});

// 오류 페이지
app.use((err,req,res,next)=>{
	const data={
		message : err.message,
		status : err.status||500,
		stack : err.stack,
	};
	
	logger(`[${data.status}]${data.message}`,'error');
	logger(data.stack,'error');

	
	if(process.env === 'production'){
		delete data.stack;
	};
	
	return res.status(data.status||500).render('error',data);
});

app.listen(app.get('PORT'),()=>{
	console.log(app.get('PORT'),'번 포트에서 서버 대기중... ');
});