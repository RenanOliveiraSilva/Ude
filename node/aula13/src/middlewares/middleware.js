exports.middlewareGlobal = (request, response, next) => {
    console.log();
    console.log('Seu middleware');
    console.log();
    next();
    
};