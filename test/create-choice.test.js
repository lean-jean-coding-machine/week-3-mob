const test = QUnit.test;
QUnit.module('createChoices');

function createChoices(choice) {
    const label = document.createElement('label');
    label.for = choice.id;
    label.textContent = choice.description;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'quest-option';
    input.required = true;
    input.value = choice.id;

    label.appendChild(input);

    return label;
}

test('Makes html label and input element', (assert) => {
    //Arrange
    const choice = {
        id: 'puppies',
        description: 'Option 1'
    };

    const expected = '<label for="puppies">Option 1<input type="radio" name="quest-option" required value="puppies"></label>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createChoices(choice);
    //Assert
    assert.equal(dom.outerHTML, expected);
});