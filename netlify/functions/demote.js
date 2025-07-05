const fs = require('fs');
const path = require('path');

const COUNTER_FILE = path.join(__dirname, 'demote_count.txt');

exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    let count = 0;
    if (fs.existsSync(COUNTER_FILE)) {
      count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8')) || 0;
    }
    count++;
    fs.writeFileSync(COUNTER_FILE, count.toString());
    return {
      statusCode: 200,
      body: JSON.stringify({ count })
    };
  } else {
    let count = 0;
    if (fs.existsSync(COUNTER_FILE)) {
      count = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8')) || 0;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ count })
    };
  }
}; 