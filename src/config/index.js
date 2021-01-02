const dotenv = require('dotenv');
const Harvest = require('harvest').default;

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
  harvest: (new Harvest({
    subdomain: process.env.HARVEST_SUBDOMAIN,
    userAgent: process.env.HARVEST_USERAGENT,
    concurrency: 1,
    auth: {
      accessToken: process.env.HARVEST_ACCESS_TOKEN,
      accountId: process.env.HARVEST_ACCOUNT_ID
    }
  }))
};
