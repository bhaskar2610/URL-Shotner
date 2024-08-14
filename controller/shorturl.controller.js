const {createShortUrl, getLongUrl} = require('../services/shorturl.service');
const createURL = async (req,res) => {
    try {
        const { longUrl } = req.body;
        const shortUrlObj= await createShortUrl(longUrl);
        if(shortUrlObj){
            res.status(200).json({shortUrl:shortUrlObj});
        }else{
            res.status(400).json({message:"Error in creating short rl"});
        }
    } catch (error) {
        return res.status(500).json({message:error.message,error:error});
    }
};

const getURL = async (req,res) => {
    try {
        const { shortCode } = req.params;
        const longUrl = await getLongUrl(shortCode);
        if(longUrl){
            return res.redirect(longUrl);
        }else{
            res.status(404).json({message:"Short URL not found  "});
        }
    } catch (error) {
        return res.status(500).json({message:error.message,error:error});
    }   
};

module.exports = { createURL, getURL };