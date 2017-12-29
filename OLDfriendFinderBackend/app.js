const express = require('express');
const app = express();
const PORT = 3000;
let location = require('./models/Locations');
let facade = require('./facade/FriendFacade');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', function (req, res, next) {
  res.send('Friend Finder Demo!')
  next();
})

app.post('/register/:distance', function (req, res, next) {
  facade(req.body.userName, req.body.loc.coordinates, req.params.distance, function (err, docs) {
    if (err) {
      console.log('error:' + err)
      return ;
    }
    res.send(docs);
    next();
  });
  
})




app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})