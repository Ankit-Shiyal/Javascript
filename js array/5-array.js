

//  join() 

let fruits = ["Apple", "Banana", "Cherry", "Orang", "Mango"]

console.log("fruits array", fruits);

console.log("array to string :", fruits.join(" "));





// flat
let number=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(number)
console.log("flat :", number.flat())

 number=[
    [1,2,3,[10,12,11,[13,14,[15,16,[17]]]]],
    [4,5,6,[21,22,23,[24,25,[26,27,[28,[29]]]]]],
    [7,8,9,[30,20,40,[50,[60,70,[80,90]]]]]
]

console.log("flat :", number.flat(Infinity))


// slice
console.log("slicing :", fruits.slice(1, 4));

console.log(" ")
