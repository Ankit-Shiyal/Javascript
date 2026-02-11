
// spread 

const num = [1,2,3,4,5]
console.log(...num)

const num2 = [...num,6,7,8,9]
console.log("num2", num2)


// rest

function play(...games){

    console.log("I am playing this game")
    console.log("I like", games[2])   
}

const game = [
    "Gta-5",
    "God of War",
    "SnowRunner"
]

play(...game)  
