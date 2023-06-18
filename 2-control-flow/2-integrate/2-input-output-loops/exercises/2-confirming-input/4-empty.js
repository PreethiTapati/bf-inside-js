'use strict';

let userInput = '';
let userConfirmed = false;

while (!userConfirmed) {
  userInput = prompt('Enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '') {
    alert('Nothing is not a name');
  } else {
    const confirmMessage = `Is this correct?\n"${userInput}"`;
    userConfirmed = confirm(confirmMessage);
  }
}

const finalMessage = `Your name is: "${userInput}"`;
alert(finalMessage);
