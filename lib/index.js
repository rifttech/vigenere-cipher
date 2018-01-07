const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const pattern = /[^A-Z]/g;
function ordA(a) {
  return a.charCodeAt(a);
}

function vigenere(text, key, decode) {
  let i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, (a)=>{
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
  });
}

class Vigenere {
  constructor() {

  }

  cipher(text,key) {
    return vigenere(text, key, false);
  }
  decipher(text, key) {
    return vigenere(text, key, true);
  }
}

module.exports = Vigenere;
