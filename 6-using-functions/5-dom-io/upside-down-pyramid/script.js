import { readString, display } from '../../../lib/dom-io.js';

import { _ } from './utils/_.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;
   const text = readString('to-pyramid');
   
   let pyramid = '';
  for (let i = 0; i < text.length; i++) {
    pyramid += text.substr(i) + '\n';
  }
  // display the pyramid
  display('pyramided', pyramid);

});
