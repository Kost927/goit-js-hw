//! ======================== HW2 Task 1 ======================
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     let indexLogItems = array.indexOf(array[i]) + 1;
//     console.log(`№ ${indexLogItems} -- ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//! ======================== HW2 Task 2 ======================

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let wordsQuantity = message.split(" ");
//   console.log(wordsQuantity);
//   for (const wordQuantity of wordsQuantity) {
//     console.log(pricePerWord);
//     return wordsQuantity.length * pricePerWord;
//   }
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

//! ======================== HW2 Task 3 ======================

// const findLongestWord = function (string) {
//   let arrayString = string.split(" ");
//   let longestWord = arrayString[0];

//   for (let i = 1; i < arrayString.length; i += 1) {
//     if (arrayString[i].length > longestWord.length) {
//       longestWord = arrayString[i];
//     }
//   }
//   return longestWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

//! ======================== HW2 Task 4 ======================
// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   if (string.length > 40) {
//     return string.slice(0, 40) + "...";
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

//! ======================== HW2 Task 5 ======================

// const checkForSpam = function (message) {
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//! ======================== HW2 Task 6 ======================

// const numbers = [];
// let input;

// let total = 0;
// do {
//   input = prompt("Enter your number");
//   if (isNaN(input)) {
//     alert(`You wrote not a number`);
//     continue;
//   }

//   console.log(numbers);

//   numbers.push(Number(input));

//   if (input === null) {
//     for (const number of numbers) {
//       total += number;
//     }
//     console.log(`total sum of numbers is ${total}`);
//   }
// } while (input !== null);

// // if (numbers.length === 0) {
// //     console.log(`You didn't enter any numbers`);
// // }

//! ======================== HW2 Task 7 ======================
