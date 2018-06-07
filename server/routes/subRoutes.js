const value = require('../services/readfile');

module.exports = app => {
  app.get('/api/subscriptions', async (req, res) => {
    const values = await value.get_value();
    var json = await JSON.stringify(eval('(' + values + ')'));
    res.send(json);
  });
};
