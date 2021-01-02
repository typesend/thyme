const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  costpoint: {
    url: process.env.COSTPOINT_LOGIN_URL,
    username: process.env.COSTPOINT_USERNAME,
    password: process.env.COSTPOINT_PASSWORD,
    system: process.env.COSTPOINT_SYSTEM
  },
  harvest: {
    accessToken: process.env.HARVEST_ACCESS_TOKEN,
    accountId: process.env.HARVEST_ACCOUNT_ID,
    subdomain: process.env.HARVEST_SUBDOMAIN
  }
};
