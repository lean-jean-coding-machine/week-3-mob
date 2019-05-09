const test = QUnit.test;

QUnit.module('isSad');

function isSad(user) {
    if(user.mood <= 0) {
        return true;
    } else {
        return false;
    }
}

test('returns true if user is sad', (assert) => {
    //Arrange
    const user = {
        mood: 0
    };

    const expected = true;
    // Set up your parameters and expectations
    //Act 
    const result = isSad(user);
    //Assert
    assert.equal(result, expected);
});

test('returns false if user is not sad', (assert) => {
    //Arrange
    const user = {
        mood: 100
    };

    const expected = false;
    // Set up your parameters and expectations
    //Act 
    const result = isSad(user);
    //Assert
    assert.equal(result, expected);
});