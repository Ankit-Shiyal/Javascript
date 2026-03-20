

// clear Time Out


function studentName() {
  console.log("my name is Ankit");

  const result = setTimeout(() => {
    console.log("Hello");
  }, 2000);

  setTimeout(() => {
    clearTimeout(result);
    console.log("clear time out");
  }, 1000);
}

studentName();