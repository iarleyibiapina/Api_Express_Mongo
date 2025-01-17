class TooManyRequestsException extends Error {
    name = 'TOO_MANY_REQUESTS_EXCEPTION';
  
    constructor(message = 'Too many requests') {
      super(message);
    }
  }
  
  module.exports = TooManyRequestsException;
  