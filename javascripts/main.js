import {getCharacters} from './data/petData.js';
import {sortEvent} from './events.js';

const initializeApp = () => {
    getCharacters();
   sortEvent();
    // charactersBuilder();
}
initializeApp();