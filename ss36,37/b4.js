const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
//sk onchange
input1.addEventListener('change', updateSum);
input2.addEventListener('change', updateSum);
//sk oninput
input1.addEventListener('input', updateSum);
input2.addEventListener('input', updateSum);

function updateSum() {
    const value1 = parseFloat(input1.value) || 0;
    const value2 = parseFloat(input2.value) || 0;
    //sk onchange
    output1.value = value1 + value2;
    // sk oninput
    output2.value = value1 + value2;
}