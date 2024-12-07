const { Client } = require('pg');
require('dotenv').config();

// module.exports.getClient = async () => {
//   const client = new Client({
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DATABASE,
//     ssl: true
//   });
//   await client.connect();
//   return client;
// };


module.exports.getClient = async () => {
  const client = new Client({
    user: 'oshagroetz',
    host: '/tmp',
    database: 'next_steps',
    password: process.env.DATABASE_PASSWORD,
    port: '5432'
  });

  client
    .connect()
    .then(() => {
      console.log(
        'Connected to PostgreSQL database from get-client!'
      );
    })
    .catch((err) => {
      console.error(
        'Error connecting to the database from get-client:',
        err
      );
    });
  return client;
};