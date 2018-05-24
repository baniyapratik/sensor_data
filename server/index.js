const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

require('./routes/subRoutes')(app);

app.listen(PORT, () => {
  console.log(`Listening on express port`, PORT);
});

module.exports.app = app;
