const inputText = document.getElementById('inputText');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

inputText.addEventListener('change', function() {
    output1.textContent = "Cách 1: " + this.value;
});
inputText.addEventListener('input', function() {
    output2.textContent = "Cách 2: " + this.value;
});