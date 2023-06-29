import { readString, display } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeThese = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');
  const toRemove= readString('to-remove'); 

  // remove all the user's characters from the input
  const noThis = 'toRemove'
  //  use `removeCharacters` to write this step of the program
  const noThis = removeCharacters(userText,toRemove);

  // --- display the input with no consonants ---
  display('removified', noThis);
};

document.getElementById('these').addEventListener('click', removeThese);
