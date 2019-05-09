import loadProfile from '../load-profile.js';
import treatDictionary from './treat-dictionary.js';
import moodDictionary from './mood-dictionary.js';
import scoreMood from './score-mood.js';
import scoreTreats from './score-treats.js';
import api from '../services/api.js';

loadProfile();

const user = api.getUser();
const moodKey = scoreMood(user.mood);
const treatsKey = scoreTreats(user.treats);
const resultText = document.getElementById('result-text');

const moodMessage = moodDictionary[moodKey];
const treatsMessage = treatDictionary[treatsKey];

resultText.textContent = moodMessage + ' ' + treatsMessage;