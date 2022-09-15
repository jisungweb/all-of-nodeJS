'use strict';
const express = require('express');
const User = require('../models/User.js');
const multer = require('multer');
// multer를 사용해서 이미지파일 서버에 저장하기! 
const upload = multer({ dest : './src/upload' }); // 파일을 저장할 폴더를 만들기! 
// 저장될때 랜덤한 이름으로 저장이 돼서, 같은 이미지를 저장하더라도, 다른 이름으로 저장된다. 
const bcrypt = require('bcrypt'); // 비밀번호 저장할 때 plain문이 아니라 hashed문으로 저장할거야. 

module.exports = () => {
    const router = express.Router();
    
    // 1. 회원가입
    router.post('/sign-up', upload.single("image") ,async(req,res) => {
        try{
            
            const { email, password } = req.body;
            const { originalname } = req.file;
            console.log(originalname);
            // 문제1.
            // enctype="multipart/form-data" 를 사용하면 req.body가 undefined가 나온다. 
            // 그렇다고 저걸 안 쓰면 multer를 사용할 수 없다. 
            let user = new User({
                email : email,
                password : password,
                image : originalname, 
            })
            let saveUser = await user.save(); // 저장! 
            console.log(saveUser); // 저장된 js객체 출력! -> mongoose덕분임. 

        }catch(err){
            return console.log(err);
        }
    })

    return router;
}