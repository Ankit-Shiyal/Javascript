

let student = "Ankit"

let ARRAY = student.split("")
console.log("reverse :", ARRAY)

let reversed = ARRAY.reverse()
console.log("array : ", reversed)

let reverseName = reversed.join("")
console.log("reverse Name : ", reverseName )

// loop

let friend = "kalpesh"

let reversedFriend= ""

 for (let i = friend.length-1; i >= 0; i--) {
  reversedFriend += friend[i];
}

console.log("reversed Friend", reversedFriend) 