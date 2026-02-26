


let fruits =["apple", "Pineapple", "banana", "strawberry", "Mango","kiwi", "papaya" ]

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for :",fruits[i]);
}
console.log(" ")

// for of
for (let i of fruits) {
  console.log("for of :", i);
}

console.log(" ")

// foe each
let num=[1,2,3,4,5,6,7,8,9]
 num.forEach(num => {
    console.log("for each :",num*2)
        
    });
console.log(" ")

//Concatenation

let con = fruits.concat(num);
console.log("Concatenation :",con)

console.log(" ")

// to string
console.log("to string :", fruits.toString())