require("dotenv").config();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const jwks = require("jwks-rsa");
const jwksClient = jwks({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  audience: process.env.AUTH0_AUDIENCE,
});

const { promisify } = require("util");

module.exports.validateAccessToken = async (req, res, next) => {
  const { authorization } = req.headers;
  // var bearerHeader = req.headers["authorization"];

  let token = "";
  if (typeof authorization !== "undefined") {
    token = authorization.split(" ")[1].toString();
  } else if (req.session.token !== "undefined") {
    token = req.session.token;
  }

  if (token) {
    try {
      const decodedToken = jwt.decode(token, { complete: true });

      const kid = decodedToken.header.kid;
      const alg = decodedToken.header.alg;
      const getSigningKey = promisify(jwksClient.getSigningKey);
      const key = await getSigningKey(kid);
      const signingKey = key.publicKey;

      const options = { algorithms: alg };
      jwt.verify(token, signingKey, options, (err, result) => {
        if (err) {
          console.log(err);
          req.session.token = null;

          res.status(403).send({
            ok: false,
            error: err,
          });
        } else {
          console.log("\n Verified: " + JSON.stringify(result));
          req.session.token = token;
          req.session.payload = decodedToken.payload;

          console.log("decodedToken.payload", decodedToken.payload);
          return next();
        }
      });
    } catch (err) {
      console.log(err);
      req.session.token = null;

      res.status(403).send({
        ok: false,
        error: err,
      });
    }
  } else {
    res.sendStatus(403);
    // res.redirect("/login");
  }
};
