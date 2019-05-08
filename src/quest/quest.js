import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';
import scoreQuest from './score-quest.js';

loadProfile();

const choiceParent = document.getElementById('choices');
const image = document.getElementById('quest-img');
const title = document.getElementById('quest-title');
const description = document.getElementById('description');
const formChoice = document.getElementById('quest-form');
const user = api.getUser();

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

formChoice.addEventListener('submit', event => {
    event.preventDefault();
    // const formData = new FormData(formChoice);
    // const choiceId = formData.get('quest-option');
    // let choice = {};
    // for(let i = 0; i < quest.choices.length; i++) {
    //     if(quest.choices[i].id === choiceId) {
    //         choice = quest.choices[i];
    //     }
    // }
    // scoreQuest(user, choice);
    // api.saveUser();
    // loadProfile();
});