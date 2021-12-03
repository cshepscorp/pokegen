const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const app = express();

// use Heroku's process.env.PORT value when deployed and 3001 when run locally
const PORT = process.env.PORT || 3001;
const path = require('path'); 

// const helpers = require('./utils/helpers'); // for help formatting dates

const exphbs = require('express-handlebars');

// pass the helpers to the existing exphbs.create() statement
const hbs = exphbs.create({ });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // link static files

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});