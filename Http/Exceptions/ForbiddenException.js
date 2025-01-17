class ForbiddenException extends Error {
    name = 'FORBIDDEN_EXCEPTION';
  
    constructor(message = 'Forbidden') {
      super(message);
    }
  }
  
  module.exports = ForbiddenException;
  