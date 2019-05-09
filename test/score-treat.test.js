const test = QUnit.test;

QUnit.module('scoreTreats');
function scoreTreats(treats) {
    if(treats <= 0) {
        return 'poor';
    } else {
        return 'wealthy';
    }
}

test('test returns poor if user has no treats', (assert) => {
    //Arrange
    const user = {
        treats: 0
    };
    const expected = 'poor';
    // Set up your parameters and expectations

    //Act 
    const result = scoreTreats(user.treats);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});

test('test returns wealthy if user has treats', (assert) => {
    //Arrange
    const user = {
        treats: 1
    };
    const expected = 'wealthy';
    // Set up your parameters and expectations

    //Act 
    const result = scoreTreats(user.treats);
    // Call the function you're testing and set the result to a const
    //Assert
    assert.equal(result, expected);
});