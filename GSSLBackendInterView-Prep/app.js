const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/authors', require('./Routers/authorRouter'));
app.use('/books', require('./Routers/bookRouter'));
app.use('/index', require('./Routers/indexRouter'));

app.listen(port , (error) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});