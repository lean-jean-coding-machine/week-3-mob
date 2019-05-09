import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('scoreQuest');

test('Adjust user profile based on quest choice', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const user = {
        name: 'Melinda',
        buddy: 'dog',
        mood: 30,
        treats: 1,
        completed: {}
    };

    const choice = {
        mood: 20,
        treats: -1
    };

    const quest = {
        id: 'park'
    };

    const expected = {
        name: 'Melinda',
        buddy: 'dog',
        mood: 50,
        treats: 0,
        completed: {
            park: true
        }
    };

    //Act 
    const result = scoreQuest(user, choice, quest);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.deepEqual(result, expected);
});