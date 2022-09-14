'use strict';
const express = require('express');
const db = require('./src/db.js'); //함수 선언문만 require
const indexRouter = require('./src/routes/indexRouter.js');
const authRouter = require('./src/routes/authRouter.js');
const app = express(); //express함수의 return값을 app으로 사용한다. (application객체를 return하기 때문에 줄여서 app)

app.set('views','./src/views'); // views를 static파일화 시킨다. 
app.set('view engine','ejs'); // ejs template engine을 사용한다.
db(); // 호출을 해야지 db가 연결된다. 
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static( './src/public' )); 

// router middleware
app.use('/', indexRouter()); // /로 들어오는 모든 경로는 indexRouter가 처리함.
app.use('/api/auth', authRouter());

module.exports = app; 