const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~KIEkyS7T#wZz2750m6r8ukhdFwvcqtKcgTk4wsuOLjO2wVpRKL0s",
};
