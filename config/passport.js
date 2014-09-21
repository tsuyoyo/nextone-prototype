var passport = require('passport');
var twitterStrategy = require('passport-twitter').Strategy;
var fs = require('fs');

var TWITTER_KEY_FILE = './keys/twitterApiKey.json';

var validation = function (token, tokenSecret, profile, done) {
  done(null, profile);
};

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

module.exports.express = {

  customMiddleware: function (app) {

    fs.readFile(TWITTER_KEY_FILE, 'utf-8', function(err, text) {

      var keys = JSON.parse(text);

      var validation = function(token, tokenSecret, profile, done) {

        // TODO : profileに色々情報が詰まってる
        console.log(profile);

        // TODO : nextTickに関して見ておく
        // http://www.slideshare.net/shigeki_ohtsu/processnext-tick-nodejs
        process.nextTick(function () {
          return done(null, profile);
        });
      };

      var strategy = new twitterStrategy({
        consumerKey: keys.api_key,
        consumerSecret: keys.api_secret,
        callbackURL: '/auth/callback'
      }, validation);

      passport.use(strategy);
    });

    app.use(passport.initialize());
    app.use(passport.session());
  }
};
