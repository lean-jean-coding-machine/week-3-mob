import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const nav = document.getElementById('quests');

const quests = api.getQuests();
//loop over quest array
for(let i = 0; i < quests.length; i++) {
    //create links to append to the nav (parent element)
    const questLink = createQuestLink(quests[i]);
    nav.appendChild(questLink);
}