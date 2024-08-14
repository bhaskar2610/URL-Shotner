const express=require('express');
const router=express.Router();

const healthRoute=require('./health.route');
const shortUrlRoute=require('./shorturl.route');


router.use("/health",healthRoute);
router.use("/shorten",shortUrlRoute)

module.exports=router;