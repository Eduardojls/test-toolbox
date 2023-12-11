const { request, response } = require("express");
const { getFilesName, getFileInfoByName } = require("../api/external");
const { validateAndFormatFile } = require("../helpers/file-validator");

const getFilesFormatted = async (req = request, res = response) => {
  const { fileName } = req.query;
  
  try {
    const response = await getFilesName();      // Get toolbox files from external api
    const files = fileName !== undefined ? [fileName] : response?.data?.files;
    let data = []
    // If files exists
    if(files){
      const promises = files.map(file => getFileInfoByName(file).then((fileInfo) => {
        if(fileInfo.data.status !== 500){
          const validation = validateAndFormatFile(fileInfo.data, file);
          if(validation.length > 0){
            // If a file info is correct, proceed to format the output
            const response = {
              "file": file,
              "lines": validation
            }
            data = data.concat(response)
          }
        }
      }).catch(e => {}))
      // Wait untill all promises are resolved
      await Promise.all(promises);
    }
    return res.status(200).json(data)
  } catch (error) {}
}; 

module.exports = { getFilesFormatted };

