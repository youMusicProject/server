const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');



const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-h7p0gvmne4mrdzom.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:4000',
    issuer: 'https://dev-h7p0gvmne4mrdzom.us.auth0.com/',
    algorithms: ['RS256']
});

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//     res.send('Secured Resource');
// });

// app.listen(port);

module.exports = {
    jwtCheck
  }