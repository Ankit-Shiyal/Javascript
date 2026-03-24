
// promise

let driving = new Promise((resolve, reject) => {

    let age = 19

    setTimeout(() => {
        if (age >= 18) {
        resolve("you can drive")
    }
    else {
        reject("you can not drive")
    }

    },2000)
})

driving.then((message) => {
    console.log(message);
})

driving.catch((err) => {
  console.log(err);
});




