//! ======================== HW2 Task 1 ======================

//! ======================== HW2 Task 2 ======================

//! ======================== HW2 Task 3 ======================

//! ======================== HW2 Task 4 ======================

//! ======================== HW2 Task 5 ======================

//! ======================== HW2 Task 6 ======================

const numbers = [];
let input;

let total = 0;
do {
  input = prompt("Enter your number");
  if (isNaN(input)) {
    alert(`You wrote not a number`);
    continue;
  }

  console.log(numbers);

  numbers.push(Number(input));

  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`total sum of numbers is ${total}`);
  }
} while (input !== null);

// if (numbers.length === 0) {
//     console.log(`You didn't enter any numbers`);
// }

//! ======================== HW2 Task 7 ======================
