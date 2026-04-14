

// filter method()

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]

console.log("number array", num)

const evenNumber = num.filter((num) => num %2===0)

console.log("even number", evenNumber)

// grater then 10

const grater = num.filter((num)=>num > 5)
console.log("grater then 5", grater)

