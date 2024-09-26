export function celsiusToFahrenheit(celsius) {
  // return (celsius * 9) / 5 + 32; // простой вариант
  
  let fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}C = ${fahrenheit}F`;
}
