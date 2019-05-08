function createChoice(choice) {
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
export default createChoice;