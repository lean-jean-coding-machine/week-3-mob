import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';
import scoreQuest from './score-quest.js';
import findById from '../find-by-id.js';

loadProfile();

const choiceParent = document.getElementById('choices');
const image = document.getElementById('quest-img');
const title = document.getElementById('quest-title');
const description = document.getElementById('description');
const formChoice = document.getElementById('quest-form');
const questResult = document.getElementById('result');
const mapButton = document.getElementById('map');
const audio = document.getElementById('audio');
const noTreatsMessage = document.getElementById('no-treats');
let user = api.getUser();

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

const quest = api.getQuest(questId);
title.textContent = quest.title;
image.src = '../../assets/quest-photos/' + quest.image;
description.textContent = quest.description;
audio.src = '../../assets/quest-sounds/' + quest.id + '.mp3';

for(let i = 0; i < quest.choices.length; i++) {
    const choice = createChoice(quest.choices[i]);
    choiceParent.appendChild(choice);
}

formChoice.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formChoice);
    const choiceId = formData.get('quest-option');
    const choiceData = findById(quest.choices, choiceId);
   
    if(choiceData.treats + user.treats >= 0) {
        user = scoreQuest(user, choiceData, quest);
        api.saveUser(user);
        loadProfile();
        questResult.textContent = choiceData.result;
        
        noTreatsMessage.classList.add('hidden');
        description.classList.add('hidden');
        formChoice.classList.add('hidden');
        questResult.classList.remove('hidden');
        mapButton.classList.remove('hidden');
    } else {
        noTreatsMessage.classList.remove('hidden');
    }
});

mapButton.addEventListener('click', () => {
    window.location = '../map/map.html';
});