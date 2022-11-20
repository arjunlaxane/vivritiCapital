//mongodb connection

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const connectDatabase = async () => {
  const data = await mongoose.connect(process.env.DB_URL);

  console.log(`MONGO DB connected with server ${data.connection.host} `);
};

module.exports = connectDatabase;
