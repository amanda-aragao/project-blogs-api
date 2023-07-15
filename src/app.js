const express = require('express');

const app = express();
const loginRouter = require('./routes/loginRoute');
const userRouter = require('./routes/userRoute');
const categoriesRouter = require('./routes/categoriesRoute');
const postRouter = require('./routes/postRoute');

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
