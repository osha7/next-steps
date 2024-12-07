const { Client } = require('pg');
require('dotenv').config();

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
      'Connected to PostgreSQL database!'
    );
  })
  .catch((err) => {
    console.error(
      'Error connecting to the database:',
      err
    );
  });
