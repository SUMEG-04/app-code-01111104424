const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (_req, res) => {
  res.send('Hello from app-code-<rollno>!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
