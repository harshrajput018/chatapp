const express = require('express');
const app = express();

// Import your endpoint code
const friendsEndpoint = require('./endpoints/friends');
const getchats = require('./endpoints/getchats') // Adjust the path accordingly
const adduser= require('./endpoints/adduser')




// Use the endpoint router as middleware
app.use('/friends', friendsEndpoint);
app.use('/getchats', getchats)
app.use('/allusers', adduser)


app.get('/',(req,res)=>{
  res.json('Hello');
})


// Set up the port
const port = process.env.PORT || 9000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
