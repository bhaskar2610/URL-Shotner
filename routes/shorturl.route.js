const express=require('express');

const router=express.Router();

const {createURL, getURL}=require('../controller/shorturl.controller'); 

router.post('/',createURL);
router.get('/:shortCode',getURL);

module.exports=router;
