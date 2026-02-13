

const person = {
    name: "Ankit",
    lastName: "Shiyal",
    city: "Bhavnagar",
    age: 20
};

console.log(person);

// using . (dot)
console.log(person.name);
console.log(person.age);

// using []
console.log(person["name"]);
console.log(person["age"]);

// using destructuring
const { name, lastName, city, age } = person;

console.log(name);
console.log(lastName);
console.log(city);
console.log(age);
