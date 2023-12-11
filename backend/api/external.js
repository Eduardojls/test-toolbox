const axios = require('axios');

// Get a list of files
const getFilesName = async () => {
  const response = await axios('https://echo-serv.tbxnet.com/v1/secret/files',{
    method: 'GET',
    headers: {
      Authorization: 'Bearer aSuperSecretKey'
    }
  });
  return response
};

// Get a file information by name
const getFileInfoByName = async (fileName) => {
  const response = await axios('https://echo-serv.tbxnet.com/v1/secret/file/' + fileName,{
    method: 'GET',
    headers: {
      Authorization: 'Bearer aSuperSecretKey'
    }
  });
  return response
};

module.exports = { getFilesName, getFileInfoByName}