const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const app = express();
// use Heroku's process.env.PORT value when deployed and 3001 when run locally
const PORT = process.env.PORT || 3001;
const path = require('path'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });