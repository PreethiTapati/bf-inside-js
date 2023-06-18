'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of a ternary

// try different values and different types
// const isVegetarian = _;
// console.log(isVegetarian);

// const favoriteFood = isVegetarian ? 'beans' : 'bacon';
// console.log(favoriteFood);

// console.log('-- end --');



const isVegetarian = true;
console.log(isVegetarian);

let favoriteFood;
if (isVegetarian) {
  favoriteFood = 'beans';
} else {
  favoriteFood = 'bacon';
}
console.log(favoriteFood);

console.log('-- end --');
