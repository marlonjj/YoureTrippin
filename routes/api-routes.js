var db = require("../models");

module.exports = function(app) {

    //See if login info matches a user
    app.post("/api/login", function(req, res){
        db.User.findOne({where: {
            username: req.body.username,
            password: req.body.password
        }}).then(function(dbUser){
            console.log("dbUser ====> ", dbUser);
            res.json(dbUser);
        });
    });

    //Register User for site
    app.post("/api/register", function(req, res){
        db.User.create({
            username: req.body.user.username,
            password: req.body.user.password,
            firstName: req.body.user.firstName,
            lastName: req.body.user.lastName
          }).then(function(dbUser){
              console.log(req.body);
            res.json(dbUser);
        });
    });

    //Get trips for user
    app.get("/api/trips/:userID", function(req, res){
        db.Trip.findAll({where: {
            userID: req.params.userID
        }}).then(function(dbTrip){
            res.json(dbTrip);
        });
    });

    //Add new trip for user
    app.post("/api/trips/", function(req, res){
        db.Trip.create({
            userID: req.params.userID,
            destination: req.body.destination,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd
        }).then(function(dbTrip){
            res.json(dbTrip);
        });
    });

    //Delete a trip
    app.delete("/api/trips/:id", function(req, res) {
        db.Trip.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbTrip) {
            res.json(dbTrip);
          });
      });

    //Get schedule for trip
    app.get("/api/schedule", function(req, res){
        db.Schedule.findAll({where: {
            tripID: req.body.tripID
        }}).then(function(dbSchedule){
            res.json(dbSchedule);
        });
    });

    //Add to schedule for trip
    app.post("/api/schedule", function(req, res){
        db.Schedule.create({
            tripID: req.body.id,
            title: req.body.title,
            body: req.body.body,
            time: req.body.dateTime
        }).then(function(dbSchedule){
            res.json(dbSchedule);
        });
    });

    //Edit item in schedule
    app.put("/api/schedule", function(req, res) {
        db.Schedule.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
          .then(function(dbSchedule) {
            res.json(dbSchedule);
          });
      });

    //Delete item from schedule
    app.delete("/api/schedule/:id", function(req, res) {
        db.Schedule.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbSchedule) {
            res.json(dbSchedule);
          });
      });


};
