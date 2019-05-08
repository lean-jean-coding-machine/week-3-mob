import findById from '../src/find-by-id.js';
const test = QUnit.test;

QUnit.module('find by id');

test('given two items in array, get 1 by its id', (assert) => {
    //Arrange
    const items = [{
        id: 'item 1',
        name: 'item 1 name'
    },
    {
        id: 'item 2',
        name: 'item 2 name'
    }];
    // Set up your parameters and expectations

    const expected = {
        id: 'item 2',
        name: 'item 2 name'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(items, 'item 2');
    //Assert
    assert.deepEqual(result, expected);
});