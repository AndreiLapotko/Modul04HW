import { greet } from "./modules/greeting.js";
import { celsiusToFahrenheit } from "./modules/convTemperature.js";
import { calculateFallDistance } from "./modules/fallDistance.js";
import { calculateAverage } from "./modules/average.js";
import { concatStrings } from "./modules/concatenation.js";

greet();

let celsiusTemp = Number(prompt("Введите температуру в градусах Цельсия: "));
console.log(celsiusToFahrenheit(celsiusTemp));
alert(celsiusToFahrenheit(celsiusTemp));

let timeOfFall = Number(prompt("Введите время падения в секундах: "));
console.log(calculateFallDistance(timeOfFall));
alert(calculateFallDistance(timeOfFall));

let a = Number(prompt("Введите первое число: "));
let b = Number(prompt("Введите второе число: "));
let c = Number(prompt("Введите третье число: "));
console.log(`Среднее арифметическое чисел ${a}, ${b} и ${c} = ` + calculateAverage(a, b, c));
alert(`Среднее арифметическое чисел ${a}, ${b} и ${c} = ` + calculateAverage(a, b, c));

let str1 = prompt("Введите первое слово: ");
let str2 = prompt("Введите второе слово: ");
console.log(concatStrings(str1, str2));
alert(concatStrings(str1, str2));
