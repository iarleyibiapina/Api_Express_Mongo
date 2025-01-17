class UnauthorizedException extends Error {
    name = 'BAD_REQUEST_EXCEPTION';
  
    constructor(message = 'Unauthorized') {
      super(message);
    }
  }
  
  module.exports = UnauthorizedException;
  