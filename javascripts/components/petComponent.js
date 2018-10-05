import {printToDom} from "../helpers/util.js";




let pet = [];
const setCharacters = (newArray) => {
    pet = newArray;
}

const getCharacterz = () => {
    return pet; 
}


const sortPeople = (e) => {
    const type = e.target.id;

    if(type === 'all'){
        allPets(pet);
        console.log("all button is clicked");
    }
    if(type=== 'cat'){
        const filterPeople = pet.filter(x => x.type === type);
        console.log(filterPeople);
        allPets(filterPeople); 
    }
    };


const sortEvent = () => {
    const allButton = document.getElementById('all');
    const catsButton = document.getElementById('cat');
    allButton.addEventListener('click', sortPeople);
    catsButton.addEventListener('click', sortPeople);
}
const allPets = (petsArray) => {
    let newString = '';
    petsArray.forEach((pet) => {


  newString += `<div class="card border-success mb-3" style="max-width: 18rem;">`;
  newString += `<div class="card">`;
  newString += `<div class="card-body text-success">`;
  newString += `<h5 class="card-title">Name: ${pet.name}</h5>`;
  newString += `<h5 class="card-title">Color: ${pet.color}</h5>`;
  newString += `<h5 class="card-title">Type: ${pet.type}</h5>`;
  newString +=  `image: <img class="card-img-top" src="${pet.imageUrl}">`;
  newString += `</div>`;
  newString += `</div>`;
  newString += `</div>`;
} );
printToDom(newString);
};
export{allPets,sortEvent,setCharacters,getCharacterz}