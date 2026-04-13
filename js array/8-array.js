

// find() 

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("find :",num.find((x) => x > 5));

// findIndex()

index = num.findIndex((x) => x > 5);

console.log("findIndex :",num[index]);



// some

console.log ("some :" , num.some((a)=>a >6))

// every

console.log ("every :" , num.every((a)=> a>5))

console.log ("every :" , num.every((a)=> a > 0))
