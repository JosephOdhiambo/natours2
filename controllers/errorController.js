const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};
const sendErrorProd = (err, res) => {
  //Operational, trustederr;r: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    //Programming or other unknon error: dom't leak error details
  } else {
    //1) Log Error
    console.error('ERROR', err);
    //2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong'
    });
  }
};
module.exports = (err, req, res, next) => {
  //   console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    if(err.)
    sendErrorProd(err, res);
  }
};
//Latest
