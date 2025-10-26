// ملف: netlify/functions/get-orders.js
const { neon } = require('@netlify/neon');

exports.handler = async function(event, context) {
  try {
    const sql = neon();
    const orders = await sql`SELECT * FROM orders`;
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orders)
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' })
    };
  }
};
