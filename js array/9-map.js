

// map method()
 
//transform according to user specified condition and return new array 

const num = [ 1, 2, 3, 4, 5, 7, 8, 9]

const newArray = num.map((num) => num*5 )

console.log("num array", num)

console.log("map array", newArray)


// 2

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

const personName = personDetails.map((personDetails) => personDetails.name)
console.log("parson name ", personName)