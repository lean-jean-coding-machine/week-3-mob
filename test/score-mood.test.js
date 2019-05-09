const test = QUnit.test;

QUnit.module('scoreMood');

function scoreMood(mood) {
    if(mood < 26) {
        return 'sad';
    } else if(mood < 76) {
        return 'average';
    } else {
        return 'happy';
    }
}

test('test 1 returns sad token', (assert) => {
    //Arrange
    const user = {
        mood: 0
    };
    const expected = 'sad';
    // Set up your parameters and expectations

    //Act 
    const result = scoreMood(user.mood);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test 1 returns sad token', (assert) => {
    //Arrange
    const user = {
        mood: 26
    };
    const expected = 'average';
    // Set up your parameters and expectations

    //Act 
    const result = scoreMood(user.mood);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test 1 returns sad token', (assert) => {
    //Arrange
    const user = {
        mood: 76
    };
    const expected = 'happy';
    // Set up your parameters and expectations

    //Act 
    const result = scoreMood(user.mood);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});