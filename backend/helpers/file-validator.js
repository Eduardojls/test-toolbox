// Validate if is a valid hexadecimal
const isHexadecimal = num => /^[0-9A-F]+$/ig.test(num);
// validate if is a valid number
const isNumber = num => /^[0-9]+$/ig.test(num);
// validate if is a valid text
const isText = text => /^[A-Za-z]+$/ig.test(text);


// This function returns true if is valid, otherwise false
const validateFields = (data, fileName) => {
  if (data.length !== 4) return false;

  const [file, text, number, hex] = data;
  
  if (!isText(text) || !isNumber(number) || !isHexadecimal(hex) || fileName !== file) {
    return false;
  }
  return true;
}

// This function split the info to handle the data 
// easily and return it
const validateAndFormatFile = (fileInfo, fileName) => {
  const data = [];
  const lines = fileInfo.split('\n');

  for (const line of lines) {
    const row = line.split(',');
    if (validateFields(row, fileName)) {
      const [file, text, number, hex] = row;
      data.push({ text, number, hex });
    }
  }

  return data;
};

module.exports = { validateAndFormatFile, isHexadecimal, isNumber, isText };
