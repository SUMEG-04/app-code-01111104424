const express = require('express');
const app = express();

const port = process.env.PORT || 3011;

app.get('/', (req, res) => {
  res.send(`App is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
