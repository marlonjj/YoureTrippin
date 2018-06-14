var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

<<<<<<< HEAD
=======
  app.get("/activities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/activities.html"));
  });

>>>>>>> 9fa104c959c2e4f710f0097ed69e9ffde5cd2936
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

  app.get("/landmarks.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../landmarks.html"));
  });
};
