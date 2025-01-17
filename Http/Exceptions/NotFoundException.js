class NotFoundException extends Error {
    name = 'NOT_FOUND_EXCEPTION';
  
    constructor(message = 'Not found') {
      super(message);
    }
  }
  
  module.exports = NotFoundException;
  