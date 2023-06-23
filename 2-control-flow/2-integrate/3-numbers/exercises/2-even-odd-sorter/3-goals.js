'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  /* -- BEGIN: exit if userInput is a valid number -- */
   if (!isNaN(userInput)) {
    userNumber = Number(userInput);
    break;
  }
 
   

  if (Number.isNaN(userNumber)) {
    alert('"', userInput, '" is not a number');
  }
  else {

  userNumber = Number(userInput);
}
}


  /* -- END -- */


const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);
