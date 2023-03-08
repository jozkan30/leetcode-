// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

var convertTemperature = function(celsius) {
    let ans = []
    let kelvin = celsius + 273.15
    let far = celsius * 1.80 + 32.00
    ans.push(kelvin, far)
    return ans
};

console.log(convertTemperature(36.50))