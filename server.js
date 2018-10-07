require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var session = require('express-session');

const db = require("./models");

//config
var passport = require('./helpers/passport');
var secret = require('./config/keys');

var PORT = process.env.PORT || 3001;
var mode = process.env.NODE_ENV;
var app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Auth & Session Initialization
app.use(session({ secret: secret.key, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/passportRoutes")(app);
require("./routes/mailRoutes.js")(app);
require("./routes/htmlRoutes")(app);

// DIsplays all routes loaded.
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
});

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    if (mode !== 'production') {
            var opn = require('opn');
            opn(`http://localhost:${PORT}`, { app: ['firefox'] })
        }
        console.log(`👋  Hey there I'm 👂 ing on Port: ${PORT}`);
  });
});

module.exports = app;
