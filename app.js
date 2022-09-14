'use strict';
const express = require('express');
const db = require('./src/db.js'); //함수 선언문만 require
const app = express(); //express함수의 return값을 app으로 사용한다. (application객체를 return하기 때문에 줄여서 app)
db(); // 호출을 해야지 db가 연결된다. 

module.exports = app; 