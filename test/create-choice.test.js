import createChoice from '../src/quest/create-choice.js';
const test = QUnit.test;
QUnit.module('createChoices');

test('Makes html label and input element', (assert) => {
    //Arrange
    const choice = {
        id: 'puppies',
        description: 'Option 1'
    };

    const expected = '<label>Option 1<input type="radio" name="quest-option" required="true" value="puppies"></label>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createChoice(choice);
    //Assert
    assert.equal(dom.outerHTML, expected);
});