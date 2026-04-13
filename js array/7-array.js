

// indexOf()

// return index position of aliment

let fruits = ["Apple", "Banana", "Cherry", "Orang", "Mango"]

console.log("array of fruits :" ,fruits)


console.log("index of orang :", fruits.indexOf("Orang"))

console.log("index of mango : ", fruits.indexOf("Mango"))


// include() method

// return true & false

console.log(" includes : ", fruits.includes("Mango"))

console.log(" includes : ", fruits.includes("watermelon"))

// sort() Method

let char = [ "a", "b", "g" ,"d", "c", "e"]

console.log("sort method", char.sort())

let number = [ 1,3,5,2,4,6,8,7]
console.log("sort number", number.sort())

// descending order

console.log("descending order : " ,number.sort((a,b) =>{
    return b-a
}))