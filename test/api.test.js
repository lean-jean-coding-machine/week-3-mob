import api from '../src/services/api.js';
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
    api.signUp(expected);
    const result = api.getUser();
    //Assert
    assert.deepEqual(result, expected);
});