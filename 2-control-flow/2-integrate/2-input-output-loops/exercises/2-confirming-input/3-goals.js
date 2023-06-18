'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  userInput = prompt('Enter your name:');

  /* -- BEGIN: validate input -- */
if (userInput === null || userInput.trim() === '') {
    alert('Invalid name. Please enter a valid name.');
  } else {
    isValidName = true;
  }


  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
