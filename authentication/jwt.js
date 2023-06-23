'use strict';

const jwt = require('jsonwebtoken');

const JWT_SECRET = 'jwt secret';

function sign(email, expiresIn = "30m") {
  return jwt.sign({email}, process.env.JWT_SECRET || JWT_SECRET, {expiresIn});
}

function verify(token) {
  try {
    jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET);
    return true;
  } catch (error) {
    return false;
  }
}

function extract(token) {
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET);
    return decode.email;
  } catch (error) {
    return null;
  }
}

module.exports = {sign, verify, extract};
