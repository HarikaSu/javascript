// API Keys and Endpoints
const exchangeRateApiKey = '5d8e14d9532043c4a541';
const unitConvertorApiKey = '0d7a12571d7a4a5fb6a4';
const openWeatherMapApiKey = '8f17aa490cd94139f991';

const exchangeRateApiUrl = '(https://api.exchangerate-api.com/v4/latest/
)';
const unitConvertorApiUrl = 'https://unitconvertor-api.herokuapp.com/';
const openWeatherMapApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Conversion Functions
async function convertCurrency(fromCurrency, toCurrency, amount) {
    const response = await fetch(`${exchangeRateApiUrl}${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];
    const result = amount * exchangeRate;
    return result;
}

async function convertLength(fromUnit, toUnit, value) {
    const response = await fetch(`${unitConvertorApiUrl}length/${fromUnit}/${toUnit}/${value}`);
    const data = await response.json();
    return data.result;
}

async function convertWeight(fromUnit, toUnit, value) {
    const response = await fetch(`${unitConvertorApiUrl}weight/${fromUnit}/${toUnit}/${value}`);
    const data = await response.json();
    return data.result;
}

async function convertTemperature(fromUnit, toUnit, value) {
    const response = await fetch(`${openWeatherMapApiUrl}?q=London&units=${fromUnit}&appid=${openWeatherMapApiKey}`);
    const data = await response.json();
    const temperature = data.main.temp;
    const result = temperature * (fromUnit === 'celsius' ? 9 / 5 + 32 : 5 / 9);
    return result;
}

// Event Listener for Converter Form Submission
document.getElementById('converter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const converterType = document.getElementById('converter-type').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const inputValue = document.getElementById('input-value').value;
    let result;
    switch (converterType) {
        case 'currency':
            result = await convertCurrency(fromUnit, toUnit, inputValue);
            break;
        case 'length':
            result = await convertLength(fromUnit, toUnit, inputValue);
            break;
        case 'weight':
            result = await convertWeight(fromUnit, toUnit, inputValue);
            break;
        case 'temperature':
            result = await convertTemperature(fromUnit, toUnit, inputValue);
            break;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
});

// Populate units dynamically
document.getElementById('converter-type').addEventListener('change', (e) => {
    const converterType = e.target.value;
    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');

    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';
    switch (converterType) {
        case 'currency':
