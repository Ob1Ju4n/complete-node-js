/**
 * Created by j.ortiz on 2/01/2019.
 */
var crypto = require('crypto-js');

var secretMsg = {
    name: 'Juan',
    secretName: 'ObiWan'
};

var secretKey = 'mayD4bWithYou';

// Encrypt
var encrypted = crypto.AES.encrypt(JSON.stringify(secretMsg), secretKey);
console.log('Encrypted message: ' + encrypted);

var bytes = crypto.AES.decrypt(encrypted, secretKey);
var decrypted = bytes.toString(crypto.enc.Utf8);

console.log('Secret name is: ' + JSON.parse(decrypted).secretName);