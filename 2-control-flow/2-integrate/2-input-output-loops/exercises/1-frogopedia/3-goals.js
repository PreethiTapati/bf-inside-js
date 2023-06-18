// 'use strict';

let userInput = '';
 while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    alert('That is not something');
    continue; // Restart the loop to prompt for input again
  }

  /* -- END: validate input -- */
 
  break;
}

 const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
 alert(finalMessage);




