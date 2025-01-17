const BadRequestException = require('../Exceptions/BadRequestException.js');
const ForbiddenException = require('../Exceptions/ForbiddenException.js');
const NotFoundException = require('../Exceptions/NotFoundException.js');
const TooManyRequestsException = require('../Exceptions/TooManyRequestsException.js');
const UnauthorizedException = require('../Exceptions/UnauthorizedException.js');

async function exceptionFilter(error, req, res, next) {
    // verifica instancia de erro e retorna
    if (error instanceof BadRequestException) {
    return res.status(400).json({
        error: 'BAD_REQUEST',
        message: error.message
    });
    }

    if (error instanceof ForbiddenException) {
    return res.status(403).json({
        error: 'FORBIDDEN',
        message: error.message
    });
    }

    if (error instanceof UnauthorizedException) {
    return res.status(401).json({
        error: 'UNAUTHORIZED',
        message: error.message
    });
    }

    if (error instanceof NotFoundException) {
    return res.status(404).json({
        error: 'NOT_FOUND',
        message: error.message
    });
    }

    if (error instanceof TooManyRequestsException) {
        return res.status(429).json({
          error: 'TOO_MANY_REQUESTS',
          message: error.message
        });
      }
    
    // if (error instanceof AxiosError) {
    //     if (error.response) {
    //         let message = error.response.data?.error;
    //         if (!message) message = 'Erro de resposta do servidor externo';
    //         const status = error.response.status || 502;
    //         return res.status(status).json({
    //             error: 'SERVER_ERROR',
    //             message
    //         });
    //     }
    
    //     if (error.request) {
    //         let message = error?.message;
    //         if (!message)
    //         message = 'Erro ao tentar realizar requisição para o servidor externo';
    
    //         return res.status(500).json({
    //         error: 'SERVER_ERROR',
    //         message
    //         });
    //     }
    // }
    
    if(error.name === 'Error') {
        return res.status(400).json({
            error: 'Validation Error',
            details: error.message,
        });
    }
    
    console.error(error.message);
    console.error(error.stack);
    res.status(500).send({ error: `Something went wrong... ${error.message}` });    
}

module.exports = exceptionFilter;