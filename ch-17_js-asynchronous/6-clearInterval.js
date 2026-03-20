

// clear interval

let name = setInterval(() => {
  console.log("Ankit")
}, 1000); 


setTimeout(() => {
  clearInterval(name)
  console.log("stope")
}, 5000)
