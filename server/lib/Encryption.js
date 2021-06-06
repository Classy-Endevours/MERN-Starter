/* eslint-disable consistent-return */
const CryptoJS = require('crypto-js');

const developmentKey = '0123456789abcdef0123456789abcdef';

const encrypt = (value) => {
  const key = CryptoJS.enc.Hex.parse(process.env.SECRET_KEY || developmentKey);
  const iv = CryptoJS.enc.Hex.parse(process.env.SECRET_KEY || developmentKey);
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(value.toString()),
    key,
    {
      iv,
    },
  );

  return encrypted.toString();
};

module.exports = {
  encrypt
};
