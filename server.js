// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
app.use(Cors());

// Initialize the main project folder
app.use(express.static('website'));


//server port
const localHost= "127.0.0.1"
const port = 8000;


const server = app.listen(port, () => {
  console.log(`Example app listening on port:http://${localHost}:${port}`)
})

//post route
app.post('/add', (req, res) => {
    const { newDate, temp, feelings } = req.body
    projectData.date = newDate
    projectData.temp = temp
    projectData.feelings = feelings
    res.end()

})
// GET route
app.get('/all', (req,res) => {
  res.send(projectData);
  
}); 








