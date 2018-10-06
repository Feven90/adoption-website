import {printToDom} from "../helpers/util.js";

let pet = [];
const setCharacters = (newArray) => {
    pet = newArray;
}

const getCharacterz = () => {
    return pet; 
}

const sortPets = (e) => {
    const type = e.target.id;

    if(type === 'all'){
        allPets(pet);
        console.log("all button is clicked");
    }
    if(type=== 'cat'){
        const filterCats = pet.filter(x => x.type === type);
        console.log(filterCats);
        allPets(filterCats); 
    }
    if(type=== 'dog'){
        const filterDogs = pet.filter(x => x.type === type);
        console.log(filterDogs);
        allPets(filterDogs); 
    }
    if(type=== 'dino'){
        const filterDinos = pet.filter(x => x.type === type);
        console.log(filterDinos);
        allPets(filterDinos); 
    }
    };

const sortEvent = () => {
    const allButton = document.getElementById('all');
    const catsButton = document.getElementById('cat');
    const dogsButton = document.getElementById('dog');
    const dinosButton = document.getElementById('dino');

    allButton.addEventListener('click', sortPets);
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click',sortPets);
    dinosButton.addEventListener('click',sortPets);
}
const allPets = (petsArray) => {
    let newString = '';
    petsArray.forEach((pet) => {
  newString += `<div class="d-flex align-content-start flex-wrap " style="max-width: 18rem;">`;
  newString += `<div class="card">`;
  newString += `<div class="card-body text-success">`;
  newString += `<h5 class="card-title">Name: ${pet.name}</h5>`;
  newString += `<h3 class="card-title">Color: ${pet.color}</h3>`;
  newString += `<h3 class="card-title">Type: ${pet.type}</h3>`;
  newString +=  `image: <img class="card-img-top" src="${pet.imageUrl}">`;
  newString += `</div>`;
  newString += `</div>`;
  newString += `</div>`;
});
printToDom(newString);
};
export{allPets,sortEvent,setCharacters,getCharacterz}