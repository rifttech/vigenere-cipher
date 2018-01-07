import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import Vigenere from '../lib';

const vigenere = new Vigenere();

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const key = "VINEGERE";

describe('Vigenere', () => {
  describe('#cipher', () => {
    it('', () =>  {
        let encryptedText = vigenere.cipher(text, key);
        console.log(encryptedText);
    });
  });

  describe('#decipher', () =>  {
    it('', () =>  {
        let encryptedText = vigenere.cipher(text, key);
        let decryptedText = vigenere.decipher(encryptedText, key);
        console.log(decryptedText);
    });
  });
});
