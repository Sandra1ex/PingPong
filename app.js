require('@babel/register');

const express = require('express');
const configApp = require('./config/serverConfig');

const mainRouter = require('./routes/mainRoute');

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log('Server is working');
});
