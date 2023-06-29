import { readString } from '../../../../../../../lib/dom-io.js';
import { colorify } from './utils/colorify.js';
const colorInput = () => {
  debugger;
  // read user's input
  const userText = readString('user-text');
  // detect if the input is a palindrome
  const itIs = colorify(userText);
  // update the UI+
  const body = document.body;

  if (itIs) {
    if (body.classList.contains('odd')) {
      body.classList.remove('odd');
    }
    body.classList.add('even');
  } else {
    if (body.classList.contains('even')) {
      body.classList.remove('even');
    }
    body.classList.add('odd');
  }
};
document.getElementById('user-text').addEventListener('input', colorInput);
