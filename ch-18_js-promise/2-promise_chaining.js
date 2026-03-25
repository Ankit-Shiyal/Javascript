

// promise chaining 

const foodOrder = new Promise((resolve, reject) => {
    let food = ["samosa", "sweets"]

    setTimeout(() => {

        if (food.length > 0) {
            resolve(food)
            console.log("Order is placed")
        }
        else {
            reject("No food selected");
            console.log("Please enter your food")
        }
    }, 2000)

})

foodOrder.then(() => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log("Food is preparing")
        }, 2000);
    });
})

    .then(() => {


        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                console.log("Food is ready");
            }, 2000);
        });
    })

    .then(() => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
                console.log("Food delivered successfully");

            }, 2000);
        });
    })

    .catch((error) => {
        console.log(error);
    });




