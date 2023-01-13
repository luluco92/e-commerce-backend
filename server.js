const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// if force = true, data is reset on server startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server started on port ${PORT}'));
});