const fs = require('fs');

// Read environment variables from a file
const envConfig = fs.readFileSync('.env.production');

// Convert buffer to string and split by new line
const envVariables = envConfig.toString().split('\n');

// Iterate over each line and add variables to process.env
envVariables.forEach((variable) => {
    if (variable.trim() !== '') {
        const [key, value] = variable.split('=');
        process.env[key.trim()] = value.trim();
    }
});
