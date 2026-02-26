

let fruits =["apple", "Pineapple", "banana", "strawberry", "Mango","kiwi", "papaya" ]

console.log("before splice",fruits.length)

fruits.splice(2, 0,"grapes");

console.log("added ", fruits)

fruits.splice(4,1,"guvava")
console.log("replace ", fruits)

fruits.splice(4,2)
console.log("remove ", fruits)

console.log("after splice",fruits.length)



