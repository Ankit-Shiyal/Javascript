document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault()

    try {
        const movieName = document.getElementById("movie").value;

        const container = document.getElementById("container")

        const output = await fetch(
            `https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`,);

        const data = await output.json()

        console.log("data", data)

        if (data.Response === "True") {
            data.Search.forEach((movie) => {
                const img = document.createElement("img")

                img.src = movie.Poster
                img.alt = movie.Title

                container.appendChild(img)
            });

        } else {
            container.innerHTML = `<h1>No movie found</h1>`;
        }

    } catch (err) {
        console.log(err.message);
    }
});


