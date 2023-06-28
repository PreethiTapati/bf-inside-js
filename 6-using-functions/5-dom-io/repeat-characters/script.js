import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { _ } from './utils/_.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;


  // read user values
 const text = readString('user-text');
 const repeatCount = readNumber('number-of-times');

  // repeat the string
const repeatedString = text.repeat(repeatCount);
  // display the repeated string
  display('repeated-output', repeatedString);
});


