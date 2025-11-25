require('dotenv').config(); // load .env automatically

module.exports = {
  URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}`
};
