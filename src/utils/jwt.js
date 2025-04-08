const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../config');

const { JWT_SECRET } = ServerConfig;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}


const generateToken = (userId, expiresIn = '1h') => {
  if (!userId) {
    throw new Error('User ID is required to generate token');
  }

  return jwt.sign({ userId }, JWT_SECRET, { expiresIn });
};



const verifyToken = (token) => {
  if (!token) return null;

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    // You can log the error for debugging if needed
    // logger.error('Token verification failed', err);
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
