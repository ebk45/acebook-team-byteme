require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.route");
const bit = require("./routes/bit.route");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
//initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = process.env.DB_URL;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/users", user);
app.use("/bits", bit);
app.use(express.static(__dirname + "/public"));

// configure xpress to use body-parser as a middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
  mongooseConnection: db
  })
}));

let port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});
