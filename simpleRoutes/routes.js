'use strict';

module.exports = function(app) {
  var user = require('../simpleControllers/userController');

  app.route('/users')
    .get(user.loadAll);


  app.route('/users/:userKey')
    .get(user.loadUser)
    .put(user.updateUserProfile);
};