

// filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(number);

const oddNumber = number.filter((a) => a % 2 !== 0);

console.log("odd number: ", oddNumber);

// 

const person = [
  { name: "Ankit Shiyal", age: 21, city: "Bhavnagar", profession: "Developer" },
  {name: "Sunil Zala",age: 18, city: "Rajkot", profession: "Engineer" },
  { name: "Abhay Paramar", age: 23, city: "Morbi", profession: "teachar" },
  { name: "Rajveer Sodha", age: 19, city: "Gondal", profession: "Engineer" },
  {name: "Raxit Tank", age: 20, city: "San Rajkot", profession: "Graphic Designer"},
];


const age = person.filter((x) => x.age >=20);

console.log("people age 20 :", age);