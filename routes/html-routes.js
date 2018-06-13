var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/activities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/activities.html"));
  });

  app.get("/vacation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/vacation.html"));
  });

  app.get("/itinerary", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/itinerary.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
