import isSad from '../src/map/is-sad.js';
const test = QUnit.test;

QUnit.module('isSad');

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