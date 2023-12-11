const isHexadecimal = num => /^[0-9A-F]+$/ig.test(num);
const isNumber = num => /^[0-9]+$/ig.test(num);
const isText = text => /^[A-Za-z]+$/ig.test(text);

const validateFields = (data, fileName) => {
  if (data.length !== 4) return false;

  const [file, text, number, hex] = data;

  if (!isText(text) || !isNumber(number) || !isHexadecimal(hex) || fileName !== file) {
    return false;
  }
  return true;
}

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
