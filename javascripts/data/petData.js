import {setCharacters, allPets,getCharacterz} from '../components/petComponent.js';

function executeThisCodeAfterFileLoaded () {
const data = JSON.parse(this.responseText);//parse chnages the json file and removes the quots from the key for the Javascript fle
setCharacters(data.pets);//data.characters - this prints out the array instead of the whole info
allPets(getCharacterz());
 

}
function executeThisCodeIfXhrFails() {
    console.log('it is broken');
}


const getCharacters = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myRequest.addEventListener('error', executeThisCodeIfXhrFails);
myRequest.open('GET','./db/pets.json');
myRequest.send();
};
export{getCharacters};