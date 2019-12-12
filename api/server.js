//var Sequelize = require('sequelize');

const cors = require('cors')

const express = require('express')
const session = require('express-session');
const app = express()
//var session = require("express-session")

const bodyParser = require('body-parser')



app.use(session({secret: 'ssshhhhh'}));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//sequelize syntax
// require('./routes/registerUser')(app);
require('./routes/findOrCreate')(app);
require('./routes/findAllUsers')(app);
// require('./routes/loginUser')(app);
// require('./routes/updateUser')(app);
// require('./routes/deleteUser')(app);


app.listen(8000, () => {
  console.log('Server started!')
});


module.exports = app;
