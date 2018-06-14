// API KEY: KKiNRjRhj75tLTYACCUbfSU4hQYniEjuRq55MIQmVE0EigMGnCpsy2jNEB13aD-hGDrNTqmj0m5w7rPuqiuhJolp4dPKXeZcgSoN84fTPvT8GhyIeFSvUi8BMQ8gW3Yx

// API GET Request: GET https://api.yelp.com/v3/businesses/search

// API location	string
// API categories string
// var data = "Berkeley";
var trilogy = "KKiNRjRhj75tLTYACCUbfSU4hQYniEjuRq55MIQmVE0EigMGnCpsy2jNEB13aD-hGDrNTqmj0m5w7rPuqiuhJolp4dPKXeZcgSoN84fTPvT8GhyIeFSvUi8BMQ8gW3Yx";
var landmarks = function(data) {
  var queryURL = "api.yelp.com/v3/search?location=berkeley&categories=landmarks&apikey="+trilogy;
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/" + queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
};

var nightlife = function(data) {
  var queryURL = "https://api.yelp.com/v3/search?location="+data+"&categories=nightlifes&apikey="+trilogy;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
};

var food = function(data) {
  var queryURL = "https://api.yelp.com/v3/search?location="+data+"&categories=food&apikey="+trilogy;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
};

var arts = function(data) {
  var queryURL = "https://api.yelp.com/v3/search?location="+data+"&categories=arts&apikey="+trilogy;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    data.json(response);
  });
};

var active = function(data) {
  var queryURL = "https://api.yelp.com/v3/search?location="+data+"&categories=active&apikey="+trilogy;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
};

var shopping = function(data) {
  var queryURL = "https://api.yelp.com/v3/search?location="+data+"&categories=shopping&apikey="+trilogy;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
};
