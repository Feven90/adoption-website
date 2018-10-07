import {sortPets} from "./components/petComponent.js";

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
export{sortEvent};