const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const container = document.getElementById("container");
const input = document.getElementById("input");

window.addEventListener("DOMContentLoaded" , apiFunction);
input.addEventListener("keyup", searchCocktail)

function apiFunction() {
    for (let i = 0; i < 12; i++) {
        fetch(url)
        .then(response => response.json())
        .then(data => createCocktail(data))
    }
}

function createCocktail(data) {
    data["drinks"].map(drinks => {
    
        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = drinks["strDrinkThumb"];
        img.classList.add("img");

        const name = document.createElement("h1");
        name.textContent = drinks["strDrink"];
        name.classList.add("name");

        div.appendChild(name);
        div.appendChild(img);
        container.appendChild(div);
    })
}

function searchCocktail(event) {

        container.innerHTML="";

        let newApi = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`;
    
        fetch(newApi)
        .then(response => response.json())
        .then(data => createCocktail(data))
}