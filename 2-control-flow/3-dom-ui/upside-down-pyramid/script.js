import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
 const text = readString('to-pyramid');
  // create the pyramid


  let pyramid = '';
  for (let i = 0; i < text.length; i++) {
    pyramid += text.substr(i) + '\n';
  }


// display the pyramid
 display('pyramided', pyramid);
  
});
