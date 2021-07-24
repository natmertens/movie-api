const jwtSecret = 'your_jwt_secret';
const cors = require('cors')

const jwt = require('jsonwebtoken'),
  passport = require('passport');

require('./passport.js');

/**
 * Generate authentication token
 * @param user 
 * @returns JWT bearer token
 */
let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, expiresIn: '7d', algorithm: 'HS256'
  });
}

/**
 * Allow users to log in
 * @name loginUser
 * @function
 * @param {*} router 
*/
module.exports = (router) => {
  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
}
