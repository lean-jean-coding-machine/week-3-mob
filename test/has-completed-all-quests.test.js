const test = QUnit.test;

QUnit.module('hasCompletedAllQuests');

function hasCompletedAllQuests(user, quests) {
    for(let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        if(!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

test('function to test if all quests are completed', (assert) => {
    //Arrange
    const user = {
        completed: {
            one: 'one',
            two: 'two',
            three: 'three'
        }
    };

    const quests = [
        { 
            id: 'one'
        },
        {
            id: 'two'
        },
        {
            id: 'three'
        }
    ];

    const expected = true;
    // Set up your parameters and expectations
    //Act 
    const result = hasCompletedAllQuests(user, quests);
    //Assert
    assert.equal(result, expected);
});