// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
const port = 4800;

/* Dependencies */

/* Middleware*/


//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
//app.use(express.static('website'));
// Spin up the server
app.listen(port,() =>{console.log(`example app listening A http://localhost:${port}`)})
//.get('/getRoute',getCallback())
//get function
// function getCallback(req,res){
//     res.send(projectData);
//     console.log(projectData);
// }

// Callback to debug

// Initialize all route with a callback function
// app.post('/postRoute',postCallback())
// //get function
// function postCallback(request,response){
//     newData={
//         temperature:request.body.temperature,
//         date:request.body.date,
//         userResponse:request.body.userResponse
//     }

//     projectData.push(newData);
// }

// Callback function to complete GET '/all'

// Post Route
   