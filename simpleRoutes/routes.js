'use strict';

module.exports = function(app) {
  var user = require('../simpleControllers/userController');
  var comments = require('../simpleControllers/commentsController');

  app.route('/users')
    .get(user.loadAll);

  app.route('/users/:userKey')
    .get(user.loadUser)
    .put(user.updateUserProfile);

  app.route('/users/new')
    .put(user.createNewProfile);

    //load all comments
    app.route('/users/:userKey/:contentRef')
        .get(comments.loadAll);

    //load an individual comment
    app.route('/users/:userKey/:contentRef/:commentKey')
        .get(comments.loadComment)
        .put(comments.saveComment)
        .delete(comments.deleteComment);

};