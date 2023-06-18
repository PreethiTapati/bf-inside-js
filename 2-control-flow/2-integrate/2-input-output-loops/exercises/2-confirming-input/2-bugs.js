'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

/*let userInput = '';
let userConfirmed = true; 
while (userConfirmed) {
  userInput = prompt('Enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === '') {
    alert('Nothing is not a name');
    continue;
  }

  const confirmMessage = `Is this correct?\n"${userInput}"`;
  userConfirmed = confirm(confirmMessage); //CONFRIM
  //console.log('userDidConfirm:', typeof userDidConfirm, userDidConfirm);
}

const finalMessage = `Your name is: "${userInput}"`;
alert(finalMessage);*/



let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('Enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput === null) {
    alert('No name entered');
    continue;
  }

  if (userInput === '') {
    alert('Nothing is not a name');
    continue;
  }

  const confirmMessage = `Is this correct?\n"${userInput}"`;
  userConfirmed = confirm(confirmMessage);
}

const finalMessage = `Your name is: "${userInput}"`;
alert(finalMessage);
