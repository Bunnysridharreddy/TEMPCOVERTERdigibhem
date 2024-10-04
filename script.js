function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelect').value;
    const result = document.getElementById('result');
    
    // Validate if input is a number
    if (isNaN(tempInput)) {
        result.innerHTML = 'Please enter a valid number!';
        return;
    }
    
    let convertedTemp;
    let output = '';

    if (unit === 'C') {
        convertedTemp = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
        output += `${convertedTemp.toFixed(2)} °F<br>`;
        convertedTemp = parseFloat(tempInput) + 273.15; // Celsius to Kelvin
        output += `${convertedTemp.toFixed(2)} K`;
    } else if (unit === 'F') {
        convertedTemp = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
        output += `${convertedTemp.toFixed(2)} °C<br>`;
        convertedTemp = (tempInput - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
        output += `${convertedTemp.toFixed(2)} K`;
    } else if (unit === 'K') {
        convertedTemp = tempInput - 273.15; // Kelvin to Celsius
        output += `${convertedTemp.toFixed(2)} °C<br>`;
        convertedTemp = (tempInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        output += `${convertedTemp.toFixed(2)} °F`;
    }

    result.innerHTML = output;
}
