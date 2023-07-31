// const { Client } = require('pg');
import {Client} from 'pg';

// Replace the following with your actual database connection details
const config = {
  user: 'admin',
  password: 'WAT499er!',
  host: '10.34.3.86',
  database: 'raritan',
  port: 5432 // Replace with your PostgreSQL port if it's different
};

// Your SQL query
const query = 'SELECT * from odbc."dcModels"';

// Create a new PostgreSQL client
const client = new Client(config);

// Connect to the database
client.connect();

// Perform the query
client.query(query, (err, result) => {
  if (err) {
    console.error('Error executing query:', err);
    client.end();
    return;
  }

  // Close the client connection
  client.end();

  // Convert the query result to JSON and print it
  const jsonResult = JSON.stringify(result.rows);
  console.log(jsonResult);
});