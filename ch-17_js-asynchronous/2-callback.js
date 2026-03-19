

// callback

function total(a, b, abc) {
  
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;

  abc("addition: " + addition);
  abc("subtraction: " + subtraction);
  abc("multiplication: " + multiplication);
}

total(10, 2, (a) => {
  console.log(a);
});
