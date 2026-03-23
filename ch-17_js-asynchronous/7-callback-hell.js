

let balance = 8000;

const payment = (amount, callback) => {
  setTimeout(() => {
    if (amount <= 0) {
      return callback("please enter valid amount");
    } else {
      console.log("payment initialized", amount );
      callback(null, amount);
    }
  }, 2000);
};


const checkBalance = (amount, callback) => {
  setTimeout(() => {
    if (balance <= 0 || amount > balance) {
      return callback("insufficient balance");
    } else {
      console.log("available balance" , balance);
      callback(null, amount);
    }
  }, 2000);
};

const paymentProcess = (amount, callback) => {
  setTimeout(() => {
    if (amount > balance) {
      return callback("insufficient balance");
    } else {
      console.log("payment in Processing");
      callback(null, amount);
    }
  }, 2000);
};

const remainBalance = (amount, callback) => {
  setTimeout(() => {
    balance -= amount;
    console.log("Available balance is ", balance);
    callback(null, amount);
  }, 2000);
};

payment(4500, (err, amount) => {
  if (err) {
    console.log(err);
  } else {
    checkBalance(amount, (err, amount) => {
      if (err) {
        console.log(err);
      } else {
        paymentProcess(amount, (err, amount) => {
          if (err) {
            console.log(err);
          } else {
            remainBalance(amount, (err, amount) => {
              if (err) {
                console.log(err);
              } else {
                console.log("result", amount);
              }
            });
          }
        });
      }
    });
  }
});