import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';
// import scoreQuest from './score-quest.js';

loadProfile();

const choiceParent = document.getElementById('choices');
const image = document.getElementById('quest-img');
const title = document.getElementById('quest-title');
const description = document.getElementById('description');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = api.getQuest(questId);
title.textContent = quest.title;
image.src = '../../assets/quest-photos/' + quest.image;
description.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = createChoice(quest.choices[i]);
    choiceParent.appendChild(choice);
}

