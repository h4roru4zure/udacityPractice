//import CryptoJS from 'crypto-js';
//import sha256 from 'crypto-js/sha256';
var CryptoJS = require('crypto-js')

const dato="name and lastname"
const dataObject = {
	id: 1,
  	body: "With Object Works too",
  	time: new Date().getTime().toString().slice(0,-3)
}

function generateHash(obj) {
	// Write your code here
  const valor = CryptoJS.SHA256(JSON.stringify(obj)).toString();
  //const valor = CryptoJS.SHA256(obj);
  return valor
}

console.log(generateHash(dato))
console.log("*******************")
console.log(generateHash(dataObject))

module.exports = generateHash
