
let fruits = ["Apple", "Banana", "Cherry", "Orang", "Mango"]

console.log("fruits Array :",fruits)

fruits.push("grapes")

console.log("push fruits", fruits)

fruits.unshift("pineapple")

console.log("add in first", fruits)

fruits.pop()
console.log("last remove", fruits)

fruits.shift()
console.log("first remove", fruits)


// splice

fruits.splice(1,2)

console.log("remove", fruits)

fruits.splice(1, 1, "pineapple")
console.log("replace", fruits)

fruits.splice(1, 0, "grapes")
console.log("adding", fruits)
