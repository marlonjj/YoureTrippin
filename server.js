var express = require("express");
var bodyParser = require("body-parser");
var yelp = require('yelp-fusion');

var client = yelp.client("bu035b3uE5ZUNzWwPOXgmcnA4sleX72DgkjWyVWNepb0c8DIvUbVk_0ixH5Vr_B6cJ_XX0NMdj60lG7CUKviT8B532Ie7IfhM4JzunMvhHT97Vhx7dv_wvFi-bUiW3Yx");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
