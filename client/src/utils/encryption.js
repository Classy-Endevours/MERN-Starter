/* eslint-disable consistent-return */
import CryptoJS from 'crypto-js';

const developmentKey = '0123456789abcdef0123456789abcdef';

export const encrypt = (value) => {
  const key = CryptoJS.enc.Hex.parse(
    process.env.REACT_APP_SECRET_KEY || developmentKey,
  );
  const iv = CryptoJS.enc.Hex.parse(
    process.env.REACT_APP_SECRET_KEY || developmentKey,
  );
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(value.toString()),
    key,
    {
      iv,
    },
  );

  return encrypted.toString();
};

export default {};
