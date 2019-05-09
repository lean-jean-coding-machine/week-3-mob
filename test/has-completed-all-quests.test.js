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

test('returns true if all tests have been completed', (assert) => {
    //Arrange
    const user = {
        completed: {
            one: true,
            two: true,
            three: true
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

test('returns false if all tests have not been completed', (assert) => {
    //Arrange
    const user = {
        completed: {
            one: true,
            three: true
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

    const expected = false;
    // Set up your parameters and expectations
    //Act 
    const result = hasCompletedAllQuests(user, quests);
    //Assert
    assert.equal(result, expected);
});