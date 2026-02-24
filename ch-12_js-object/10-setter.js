


// 1
const person = {
    age: 0,   
set age(value) {
    if (value >= 18) {
        return console.log("you can give vote")
    } else {
        console.log("Invalid age!");
    }
   }
};

person.age = 21;  
console.log(person._age);   

person.age = 16;  