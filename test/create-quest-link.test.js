import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('createQuestLink');


test('Makes html link to quest page', (assert) => {
    //Arrange
    const quest = {
        id: 'park',
        title: 'Go to the Park'
    };
    const expected = '<a class="quest" href="../quest/quest.html?id=park">Go to the Park</a>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});