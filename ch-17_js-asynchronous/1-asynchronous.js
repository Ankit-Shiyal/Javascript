

//Asynchronous 

function student(name) {
  setTimeout(() => {
    name("Ankit shiyal");
  }, 2000);
}

 console.log("hello")

student((data) => {
  console.log(data);
 
});