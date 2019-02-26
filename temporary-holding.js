const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');

//initialize our express app
const app = express();
const Database = require('./models/database-model')
// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url =
// 'mongodb://someuser:abcd1234@bytemedb-shard-00-00-xlm9y.mongodb.net:27017,bytemedb-shard-00-01-xlm9y.mongodb.net:27017,bytemedb-shard-00-02-xlm9y.mongodb.net:27017/test?ssl=true&replicaSet=bytemedb-shard-0&authSource=admin&retryWrites=true';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
let new_database = Database
let db_connection = new_database.connectDb()
db_connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/users', user);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));


let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});





const mongoose = require('mongoose');

class Database {
  construtor(){
    this._dbUrl = 'mongodb://testing:testing123!@cluster0-shard-00-00-fe7mz.mongodb.net:27017,cluster0-shard-00-01-fe7mz.mongodb.net:27017,cluster0-shard-00-02-fe7mz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
  }
  changeDbUrl(testUrl) {
    this._dbUrl = testUrl;
  }
  connectDb(){
    let mongoDB = process.env.MONGODB_URI || 'mongodb://testing:testing123!@cluster0-shard-00-00-fe7mz.mongodb.net:27017,cluster0-shard-00-01-fe7mz.mongodb.net:27017,cluster0-shard-00-02-fe7mz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
    console.log(mongoDB)
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    return mongoose.connection;
  }
}

module.exports = new Database()
