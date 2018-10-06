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
    console.log(type);

    if(type === 'all'){
        allPets(pet);
    }
    if(type=== 'cat'){
        const filterCats = pet.filter(x => x.type === type);
        allPets(filterCats); 
    }
    if(type=== 'dog'){
        const filterDogs = pet.filter(x => x.type === type);
        allPets(filterDogs); 
    }
    if(type=== 'dino'){
        const filterDinos = pet.filter(x => x.type === type);
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

const typeStringBuilder = (type) => {
    switch(type) {
        case "cat":
        return `<h3 class="card-footer bg-primary">${type}</h3>`;
        case "dog":
        return `<h3 class="card-footer bg-info">${type}</h3>`
        default:
        return `<h3 class="card-footer bg-warning">${type}</h3>`
    }
}
const allPets = (petsArray) => {
    let newString = '';
    petsArray.forEach((pets,i) => {
if (i%3===0) {
    newString += `<div class="card-deck">`;
}
  newString += `<div class="card col-4">`;
  newString += `<h5 class="card-header"> ${pets.name}</h5>`;
  newString +=  ` <img class="card-img-top" src="${pets.imageUrl}">`;
  newString += `<div class="card-body">`;
  newString += `<h3 class="card-title"> ${pets.color}</h3>`;
  newString += `</div>`;
  newString += typeStringBuilder(pets.type);
  newString += `</div>`;
if(i%3===2 || i===petsArray.length-1){
    newString += `</div>`;
}

});
printToDom(newString);
};
export{allPets,sortEvent,setCharacters,getCharacterz}
