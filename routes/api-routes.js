var db = require("../models");

module.exports = function(app) {

    //See if login info matches a user
    app.get("/api/login", function(req, res){
        db.User.findOne({where: {
            username: req.body.username,
            password: req.body.password
        }}).then(function(dbUser){
            res.json(dbUser);
        })
    })

    //Register User for site
    app.post("/api/register", function(req, res){
        db.User.create({
            username: req.body.username,
            password: req.body.password
          }).then(function(dbUser){
            res.json(dbUser);
        })
    })

    //Get trips for user
    app.get("/api/trips", function(req, res){
        db.Trip.findAll({where: {
            userID: req.body.userID
        }}).then(function(dbTrip){
            res.json(dbTrip);
        })
    })

    //Add new trip for user
    app.post("/api/trips", function(req, res){

    })

    //Get schedule for trip
    app.get("/api/schedule", function(req, res){
        
    })

    //Add to schedule for trip
    app.post("/api/schedule", function(req, res){
        
    })




}