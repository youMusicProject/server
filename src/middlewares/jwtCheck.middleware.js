const { expressjwt: expressJwt } = require('express-jwt');
const jwks = require("jwks-rsa");

//PREGUNTAR POR QUE NO FUNCIONA EL ISSUER
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;


const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-h7p0gvmne4mrdzom.us.auth0.com/.well-known/jwks.json`
    }),
    audience: audience,
    issuer: issuer,
    algorithms: ['RS256']
});

module.exports = jwtCheck;