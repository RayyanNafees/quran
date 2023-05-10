import CryptoJS from "crypto-js";

const KEY = 'import.meta.env.LOCAL_STORAGE_ENCRYPT_KEY'
const ENCRYPTION_KEY = 'my-secret-key'

export const encrypt = (data: any):string => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY)
  return encryptedData.toString()
}

export const decrypt = (encryptedData:string):any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY)
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  return decryptedData
}




// Taken from Github docs example @ https://github.com/brix/crypto-js#plain-text-encryption
