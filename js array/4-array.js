//  Iterating 

const fruits = [
  "apple",
  "grapes",
  "banana",
  "cheery",
  "mango",
  "strawberry",
];


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits[5]);

console.log("");

//for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("");

// for of

for (let element of fruits) {
  console.log(element);
}

// forEach 

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.forEach((num) => {
  console.log(num * 2);
});

// concat

const vegetables = ["potato", "tomato", "onion", "garlic"];

const shopItems = fruits.concat(vegetables);

console.log("shop items", shopItems);

console.log("fruits and vegetables concat ",shopItems.toString());