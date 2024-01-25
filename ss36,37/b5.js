const inputText = document.getElementById('inputText');
const outputList = document.getElementById('outputList');

function addItem() {

    const inputValue = inputText.value.trim();

    if (inputValue !== '') {
    
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

        outputList.appendChild(listItem);

        inputText.value = '';

        inputText.style.backgroundColor = 'white';
    } else {
        inputText.style.backgroundColor = 'yellow';
    }
}