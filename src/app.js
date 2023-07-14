const express = require('express');

const app = express();
const loginRoute = require('./routes/loginRouter');
const userRoute = require('./routes/userRouter');

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
