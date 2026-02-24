
// 1
const person={
    name:"Ankit",
    age:"20",
    city:"bhavnagar"
}
delete person.age;

console.log(person)

console.log(person.hasOwnProperty("age"))
console.log(person.hasOwnProperty("city"))

console.log(Object.keys(person))
console.log(Object.values(person))


// 2
const car = {
    brand: "BMW",
    model: "M5",
    year: 2025
};

delete car.year
console.log(car)

console.log(car.hasOwnProperty("year"))
console.log(car.hasOwnProperty("model"))

console.log(Object.keys(car))
console.log(Object.values(car))

