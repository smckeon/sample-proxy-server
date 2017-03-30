var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');
var accountSid = require('./twilio_keys').accountSid;
var authToken = require('./twilio_keys').authToken;

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/testing', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

var client = require('twilio')(accountSid, authToken);


app.get('/sms', function(req, res) {
  var message = req.query.message.description + " " + req.query.message.address + " " + req.query.message.date + " " + req.query.message.time;

  client.messages.create({
     to: req.query.number,
     from: "+19802081323",
     body: message
  }, function(err, message) {
     res.send(message);
  });
})

// the test stuff
// var accountSid = 'AC85d2134d5594d3ec6a1a5ac648f7e7da';
// var authToken = 'bd6b158d4558e90899bcf9731d14c380';
// from: "+15005550006",

// the good stuff
// var accountSid = 'ACf9cc8d37c8f9b6f70a92905d2df84e30';
// var authToken = '2a37f2f045fe56d9fa351adff39bd3c5';
// from: "+19802081323",

//require the Twilio module and create a REST client


// client.messages.create({
//    to: "+15005550006",
//    from: "+15005550006",
//    body: "What is up!"
// }, function(err, message) {
//    console.log(message.sid);
// });




/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');


/* BreweryDB API Example */

// app.get('/api', function(req, res){ // listens for request on /api route
//   var lat = req.query.lat; // grabs lat and lng queries from the request object
//   var lng = req.query.lng;
//   request('https://api.brewerydb.com/v2/search/geo/point?lat=' + lat + '&lng=' + lng + '&type=beer&hasImages=Y&key=72a751214ab8b53056ac0a6d8376dc2d', function (error, response, body) { // api url
//     if (!error && response.statusCode === 200) {
//       console.log('beer');
//       res.send(body); // if no errors, send the body of data back to front end
//     }
//    });
// });
