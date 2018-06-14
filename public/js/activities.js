// API KEY: KKiNRjRhj75tLTYACCUbfSU4hQYniEjuRq55MIQmVE0EigMGnCpsy2jNEB13aD-hGDrNTqmj0m5w7rPuqiuhJolp4dPKXeZcgSoN84fTPvT8GhyIeFSvUi8BMQ8gW3Yx

// API GET Request: GET https://api.yelp.com/v3/businesses/search

// var yelp = require('yelp-fusion');
var trilogy = "bu035b3uE5ZUNzWwPOXgmcnA4sleX72DgkjWyVWNepb0c8DIvUbVk_0ixH5Vr_B6cJ_XX0NMdj60lG7CUKviT8B532Ie7IfhM4JzunMvhHT97Vhx7dv_wvFi-bUiW3Yx";
// var landmarks = function(data) {
//   var queryURL = "api.yelp.com/v3/search?location=berkeley&categories=landmarks&apikey="+trilogy;
//   $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/" + queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });
// };
// var client = yelp.client("bu035b3uE5ZUNzWwPOXgmcnA4sleX72DgkjWyVWNepb0c8DIvUbVk_0ixH5Vr_B6cJ_XX0NMdj60lG7CUKviT8B532Ie7IfhM4JzunMvhHT97Vhx7dv_wvFi-bUiW3Yx");

var landmarks = function(data) {
client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});};

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
