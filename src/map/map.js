import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import isSad from './is-sad.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';

loadProfile();

const nav = document.getElementById('quests');

const quests = api.getQuests();
const user = api.getUser();

if(isSad(user) || hasCompletedAllQuests(user, quests)) {
    window.location = '../end/end.html';
}
//loop over quest array
for(let i = 0; i < quests.length; i++) {
    //create links to append to the nav (parent element)
    let quest = quests[i];
    let dom = null;
    if(user.completed[quest.id]) {
        dom = createCompletedQuest(quest);
    } else {
        dom = createQuestLink(quest);
    }
    nav.appendChild(dom);
}