const {mongoose,MongoClient } = require('mongoose');

const username = 'Your username';
const password = 'Your password';
const URL = `mongodb+srv://${username}:${password}@todolist.ylcbtkc.mongodb.net/todolist`;
const local = 'mongodb://localhost:27017';

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log('Connect successfull!!!');
  } catch (error) {
    console.log('Fail :(');
  }
}

module.exports = { connect };

