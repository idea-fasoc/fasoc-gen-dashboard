const { wrap } = require('async-middleware');

const requestBodyValidation = require('./commands/verify-request-body');
const createUser = require('./commands/create-user');
const loadPage = require('./commands/load-page');

module.exports = router => {
  router.get('/register');

  router.post('/register');

  return router;
};
