//Displays the temperature in Kelvin
const kelvin = 293 ;

//Kelvin temperature converted into Celsius
var celsius = kelvin - 273;

//Celcius temperature converted into Fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;

//Rounds temperature to the lowest or equal interger
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
