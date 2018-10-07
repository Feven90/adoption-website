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
  newString += `<div class="card col-3 text-center">`;
  newString += `<h5 class="card-header"> ${pets.name}</h5>`;
  newString +=  ` <img class="card-img-top" src="${pets.imageUrl}">`;
  newString += `<div class="card-body">`;
  newString += `<h3 class="card-title"> ${pets.color}</h3>`;
  newString += `<p class="card-title"> ${pets.specialSkill}</p>`;
  newString += `</div>`;
  newString += typeStringBuilder(pets.type);
  newString += `</div>`;
if(i%3===2 || i===petsArray.length-1){
    newString += `</div>`;
}

});
printToDom(newString);
};
export{allPets,setCharacters,getCharacterz,sortPets}
