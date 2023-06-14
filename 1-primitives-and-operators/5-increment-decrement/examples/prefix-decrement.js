'use strict';

console.log('-- begin --');

console.log('prefix decrement: --x');

/* two things happen when you use --x (in this order!)
  a. assign x to it's current value minus 1
  b. read the value stored by x
*/

let x = -2;
// let x = -1;
// let x = 0;
// let x = 1;
// let x = 2;
console.log('initial x:', x); // -2 // 2

const _1_read = --x;//-2 //2
console.log('1.a assign:', _1_read); // -3 //1
console.log('1.b read:', x); // -3 //1 

const _2_read = --x; //-3 // 1
console.log('2.a assign:', _2_read);// -4 // 0
console.log('2.b read:', x);// -4 //0

const _3_read = --x;// -4 //0
console.log('3.a assign:', _3_read);//  -5 //-1
console.log('3.b read:', x); // -5 //-1

const _4_read = --x;// -5 //-1
console.log('4.a assign:', _4_read);// -6 //-2
console.log('4.b read:', x); // -6 // -2

console.log('-- end --');
