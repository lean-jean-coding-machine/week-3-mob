import api from '../src/services/api.js';
import questArray from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('save user and retrieve user correctly', (assert) => {
    //Arrange
    const expected = {
        name: 'Melinda',
        buddy: 'dog',
        mood: 30,
        treats: 1
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    api.saveUser(expected);
    const result = api.getUser();
    //Assert
    assert.deepEqual(result, expected);
});

test('using api to get quests', (assert) => {
    //Arrange
    const expected = questArray;
    //Act 
    const result = api.getQuests();

    //Assert
    assert.deepEqual(result, expected);
});

test('returns quest by id', (assert) => {
    //Arrange
    const expectedQuest = questArray[1];
    //Act 
    const foundQuest = api.getQuest(expectedQuest.id);

    //Assert
    assert.deepEqual(foundQuest, expectedQuest);
});