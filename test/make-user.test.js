import makeUser from '../src/make-user.js';
const test = QUnit.test;

QUnit.module('makeUser');

test('makeUser function creates user object from form data', (assert) => {
    //Arrange
    const formData = new FormData();
    // Set up your parameters and expectations
    formData.set('name', 'Melinda');
    formData.set('buddy', 'dog');
    const expected = {
        name: 'Melinda',
        buddy: 'dog',
        mood: 30,
        treats: 1
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = makeUser(formData);
    //Assert
    assert.deepEqual(result, expected);
});