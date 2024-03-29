const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];
  
  const imageParams = {
    Bucket: 'user-images-079e259d-2c10-432d-ae56-745912dbfbbf',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: 'public-read'
  };

  return imageParams;
};

module.exports = params;