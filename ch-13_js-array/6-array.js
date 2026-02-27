


// join 
let fruits =["apple", "Pineapple", "banana", "strawberry", "Mango","kiwi", "papaya" ]

console.log("fruites", fruits)

console.log("join :", fruits.join(" "))

console.log(" ")

// slice
console.log("slicing :", fruits.slice(3, 6));

console.log(" ")


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

console.log(" ")

// some
let num = [10, 20, 30, 40, 70, 60, 80];

let someNUM = num.some((a) => {
  return a > 10;
});
console.log("some :",someNUM);

// reverse

console.log("reverse :", num.reverse())


// value

const numValue = num.values();

for (let value of numValue) {
  console.log("value", value);
}

