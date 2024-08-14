
const { ShortUrl } = require('../models/shortUrl.model');

    const createShortUrl = async (longUrl) => {
        try {
            if(!longUrl){
                throw new Error("Long URL is required");
            }
            const shortCode = Math.random().toString(36).substring(7);
            const shortUrlObj = await new ShortUrl({
                long_url: longUrl,
                short_code: shortCode,
                short_url: `http://localhost:8000/api/shorten/${shortCode}`
            })
            const shortUrl = await shortUrlObj.save();
            return shortUrl.short_url;
        } catch (error) {
            throw new Error(error);
        }
    };
    
    const getLongUrl = async (shortCode) => {
        try {
            const shortUrl = await ShortUrl.findOne({ short_code: shortCode });
            if (!shortUrl) {
                return null;
            }
            return shortUrl.long_url;
        } catch (error) {
            throw new Error(error);
        }
    };
    
    module.exports = { createShortUrl, getLongUrl };