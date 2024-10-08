const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');


// Connect to MongoDB
const connectToDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
};
module.exports = { connectToDatabase };