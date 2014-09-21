/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {

  login: function(req, res) {
    passport.authenticate('twitter')(req, res);
  },

  logout: function(req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  },

  callback: function(req, res) {
    passport.authenticate('twitter',
      { successRedirect: '/',
        failureRedirect: '/post' })(req, res); // <-- とりあえず
  }


};

