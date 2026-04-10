

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