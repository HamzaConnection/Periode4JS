const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/api/movies', function (req, res) {
    const returnObj = {
        "title": "The Basics - Networking",
        "description": "Your app fetched this from a remote endpoint!"
    }
    res.json(returnObj);
  })
  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})