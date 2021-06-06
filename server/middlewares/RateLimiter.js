const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 6 * 1000, // 6 seconds
    max: 2 // limit each IP to 2 requests per windowMs
  });

module.exports = limiter;