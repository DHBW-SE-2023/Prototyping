// renderer.js
const { ipcRenderer } = require('electron');

const input = document.getElementById('input');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const expression = input.value;
    ipcRenderer.send('calculate', expression);
});

ipcRenderer.on('calculation-result', (event, result) => {
    resultDiv.textContent = `Ergebnis: ${result}`;
});
