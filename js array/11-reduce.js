
// reduce method()

// result in to single output

let num =[1,2,3,4,5,6,7,8,9,10]

console.log("number array", num)

const sumOfArray = num.reduce((acc,curr) =>{
    return acc + curr
})
console.log(" som os array :" ,sumOfArray)