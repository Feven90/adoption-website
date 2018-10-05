import {getCharacters} from './data/petData.js';
import {sortEvent} from './components/petComponent.js';

const initializeApp = () => {
    getCharacters();
   sortEvent();
    // charactersBuilder();
}
initializeApp();