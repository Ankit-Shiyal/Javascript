const person = {
    name: "Ankit",
    age: 20,
    city: "Bhavngar"
};

for (let key in person) {
    console.log(key+ " - " +person[key])          
    
}

// 2
const car = {
    brand: "BMW",
    model: "M5",
    year: 2025
};

for (let key in car) {
    console.log(key + "-" + car[key]);
}