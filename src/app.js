const express = require('express');

const app = express();
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
