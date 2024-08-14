const express = require('express');
const { PORT } = require('./config/config');
const { connectToDatabase } = require('./config/database');
const shortUrlRoute = require('./routes/shorturl.route');
const app = express();
const port = PORT||8000;



connectToDatabase();
app.use(express.json());
app.use('/api',shortUrlRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});