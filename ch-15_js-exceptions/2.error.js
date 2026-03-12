


function checkAge() {
  const age = 19;

  try {
    if (age > 18) {
      console.log("you are eligible for voting");
    } else {
      throw new Error("you are not eligible for voting");
    }
  } catch (error) {
    console.log(error.message);
  }
   finally {
    console.log("finally code");
  }
}

checkAge();