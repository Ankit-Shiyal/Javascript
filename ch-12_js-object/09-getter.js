
// 1

const person = {
    firstName: "Ankit",
    Middlename:"Ashokbhai",
    LastName: "Shiyal",

    get FullName() {
        return this.firstName + " " + this.Middlename+ " " + this.LastName;

    }
}

console.log(person.FullName)



// 2



const email = {
    firstName: "ankit",
    LastName: "shiyal",
    num:2445,
    get gmail() {
        return this.firstName + this.LastName + this.num+ "@gmail.com";

    }
}

console.log(email.gmail)

