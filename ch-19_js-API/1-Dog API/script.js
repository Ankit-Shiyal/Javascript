
document.getElementById("btn").addEventListener("click", async () =>{


    let img = document.getElementById("dogImage")

    let DOgIMG = await fetch("https://dog.ceo/api/breeds/image/random")

    let result = await DOgIMG.json()

    if(result.status !== "success"){
        throw new console.error("API not working");

        
    }

    else{
        img.src = result.message
    }

})


