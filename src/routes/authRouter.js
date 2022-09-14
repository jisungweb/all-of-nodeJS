'use strict';
const express = require('express');

module.exports = () => {
    const router = express.Router();

    // 1. 회원가입
    router.post('/sign-up', async(req,res) => {
        try{
            return console.log('회원가입 api호출!');
        }catch(err){
            return console.log(err);
        }
    })

    return router;
}