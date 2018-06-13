var db = require("../models");

module.exports = function(app) {

    //See if login info matches a user
    app.get("/api/login", function(req, res) {
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    })

    //Register User for site
    app.post("/api/register", function(req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }).then(function(dbUser) {
            res.json(dbUser);
        })
    })

    //Get trips for user
    app.get("/api/trips/:id", function(req, res) {
        db.Trip.findAll({
            where: {
                userID: req.params.id
            }
        }).then(function(dbTrip) {
            res.json(dbTrip);
        })
    })

    //Add new trip for user
    app.post("/api/trips/:id", function(req, res) {
        db.Trip.create({
            userId: req.params.id,
            destination: req.body.destination,
            dateStart: req.body.dateStart,
            dateEnd: req.body.dateEnd
        }).then(function(dbTrip) {
            res.json(dbTrip);
        })
    })

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
    app.get("/api/schedule", function(req, res) {
        db.Schedule.findAll({
            where: {
                tripID: req.body.tripID
            }
        }).then(function(dbSchedule) {
            res.json(dbSchedule);
        })
    })

    //Add to schedule for trip
    app.post("/api/schedule", function(req, res) {
        db.Schedule.create({
            tripID: req.body.id,
            title: req.body.title,
            body: req.body.body,
            time: req.body.dateTime
        }).then(function(dbSchedule) {
            res.json(dbSchedule);
        })
    })

    //Edit item in schedule
    app.put("/api/schedule", function(req, res) {
        db.Schedule.update(req.body, {
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

    // GET route for getting all of the todos
    app.get("/api/todos", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Todo.findAll({}).then(function(dbTodo) {
            res.json(dbTodo);
        });
    });

    // POST route for saving a new todo
    app.post("/api/todos", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Todo.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(dbTodo) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbTodo);
        });
    });
    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/todos/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.Todo.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo);
        });

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/todos", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Todo.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbTodo) {
            res.json(dbTodo);
        });
    });


}