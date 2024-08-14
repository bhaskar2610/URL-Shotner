const express=require('express');

const router=express.Router();

const {createURL, getURL}=require('../controller/shorturl.controller'); 

router.post('/shorturl',createURL);
router.get('/shorten/:shortCode',getURL);

module.exports=router;
