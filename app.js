const Api =  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"

window.addEventListener('DOMContentLoaded', getApi)

const Cards = document.getElementById("Cards")

document.addEventListener('keyup', esp =>{
    if (esp.key === ("Seeker")){

        if (esp.key ==="space") esp.target.value = ""
        
        document.querySelectorAll('.Cards').forEach(Element => {

            Element.textContent.toLowerCase().includes(esp.target.value)
            ?Element.classList.remove("filter")
            :Element.classList.add("filter")

        })
            
    
    }

})


function getApi(){
    fetch(Api)
    .then(response => response.json())
    .then(data => {
        data.drinks.forEach(results =>{

        const div = document.createElement("div")
        div.classList.add("Cards")

        const img =document.createElement ("img")
        img.src = results["strDrinkThumb"]
        img.class.classList.add("img")

        const name =document.createElement("name")
        name.textContent = results["strDrink"]
        name.classList.add("name")

        div.appendChild(img)
        div.appendChild(name)
        Cards.appendChild(div)
})})
}