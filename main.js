const root = document.querySelector('#root');

const h1 = document.createElement('h1');

h1.textContent = "Boisons";
root.appendChild(h1);


const button = document.createElement('button');
button.textContent = 'Click me';

root.appendChild(button);

// // function test() {
// //     console.log('test');
// // }

const fetchRandomDrink = async () => {
    const responseCocktail = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

    return await responseCocktail.json();
}


button.addEventListener('click', async () => {
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//         .then((response) => {
//              return response.json()
//         })
//         .then((response) => {
//             const randomDrink = response.drinks[0];
//             const h1 =  document.createElement('h1');

//             h1.textContent = randomDrink.strDrink;

//             root.appendChild(h1);
//         })
//         .catch((error) => {
//             alert("Erreur : " + error)
//         });
    const response = await fetchRandomDrink();
    const randomDrink = response.drinks[0];
    const h31 = document.createElement('h3');
    const h32 = document.createElement('h3');
    const h33 = document.createElement('h3');
    const h34 = document.createElement('h3');
    let h4 = document.createElement('h4');
    const imgElement = document.createElement("img");

    h31.textContent = "nom : " +randomDrink.strDrink;
    h32.textContent = "category : " + randomDrink.strCategory;
    h33.textContent = "Instructions : " + randomDrink.strInstructions;
    h34.textContent = "Ingrédients :";    
    imgElement.src = randomDrink.strDrinkThumb;

    root.appendChild(h31);
    root.appendChild(h32);
    root.appendChild(h33);
    root.appendChild(h34);

    let i = 1;
    h4.textContent = "    -  " +randomDrink["strIngredient"+i];
    while (randomDrink["strIngredient"+i] != null) {
        root.appendChild(h4);
        i++;
        h4 = document.createElement('h4');
        h4.textContent = "    -  " +randomDrink["strIngredient"+i];
    }
    
    root.appendChild(imgElement);
});

