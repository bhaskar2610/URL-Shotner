const path = require('path');
const dotenv = require('dotenv');
const Joi = require('joi');


dotenv.config({ path: path.join(__dirname, '../.env') })

// Joi validation schema
const envVarsSchema = Joi.object()
.keys({
    PORT: Joi.string().required(),
    MONGO_URI: Joi.string().required()
}).unknown();

// Validate environment variables
const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);
if (error) {
    throw new Error(`Validation error: ${error.message}`);
}

// Extract validated environment variables
const { PORT,MONGO_URI } = envVars;

// Export environment variables
module.exports = {
    PORT: PORT,
    MONGO_URI:MONGO_URI
};