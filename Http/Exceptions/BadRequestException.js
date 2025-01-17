class BadRequestException extends Error {
    name = 'BAD_REQUEST_EXCEPTION';
    
    constructor(message = 'Invalid request') {
        super(message);
    }
}

module.exports = BadRequestException;
  