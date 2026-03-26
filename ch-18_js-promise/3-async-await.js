


// async await version

const foodOrder = () => {
    return new Promise((resolve, reject) => {
        let food = ["samosa", "sweets"];

        setTimeout(() => {
            if (food.length > 0) {
                console.log("Order is placed");
                resolve();
            } else {
                reject("No food selected");
            }
        }, 2000);
    });
};

const prepareFood = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is preparing");
            resolve();
        }, 2000);
    });
};

const readyFood = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is ready");
            resolve();
        }, 2000);
    });
};

const deliverFood = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food delivered successfully");
            resolve();
        }, 2000);
    });
};


async function orderProcess() {
    try {
        await foodOrder()
        await prepareFood()
        await readyFood()
        await deliverFood()
    } catch (error) {
        console.log(error)
    }
}

orderProcess()