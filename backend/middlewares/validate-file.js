const { request, response } = require('express');

// This middleware function validates the query param 
const validateFileName = (req = request, res = response, next) => {
  const fileName = req.query.fileName;
  if(fileName !== undefined){
    //  Must be a string and ends with .csv format, otherwise return status code 400
    if ( typeof fileName !== 'string' || (fileName.length > 0 && !fileName.endsWith('.csv'))) {
      res.status(400).json({
        message: 'Must be a string | Must constain .csv',
        status: 'Bad Request',
        code: 400,
        example: 'test6.csv'
      });
    };
  }
  next();
};

module.exports = { validateFileName };