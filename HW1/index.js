//! ================ task 1 ===================

// let name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

//! ======================== task 2 ===================

// const total = 100;
// const zero = 0;
// let ordered = prompt("items quantity");

// console.log(ordered);

// if (ordered === null) {
//     console.log("Отмена")

// } else if (isNaN(ordered)) {
//     console.log("Не верно введено значение")
// } else if (Number(ordered) === zero) {
//     console.log("Сделайте Ваш заказ, пожалуйста")
// } else if (Number(ordered) <= total) {
//     console.log("Заказ оформлен, с вами свяжется менеджер")
// } else {
//     console.log("На складе не достаточно товаров")
// }

//! ======================== task 3 ===================

// const ADMIN_PASSWORD = "jqueryismyjam";
// let enterPassword = prompt("Введите ваш пароль доступа");

// if (enterPassword === null) {
//   console.log("Отменено пользователем!");
// } else if (enterPassword === ADMIN_PASSWORD) {
//   console.log("Добро пожаловать!");
// } else {
//   console.log("Не верно введенный пароль");
// }
// alert("Доступ запрещен, неверный пароль!");

//! ======================== task 4 ===================

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let balance;

// let ordered = prompt("How many droids do you want to buy?");

// if (ordered === null) {
//   console.log("User canseled");
// } else if (isNaN(ordered)) {
//   console.log("Wrong value");
// } else if ((totalPrice = pricePerDroid * ordered)) {
//   if (credits <= totalPrice) {
//     console.log(`Not anough money`);
//   } else if ((balance = credits - totalPrice)) {
//     console.log(`You bougt ${ordered} droids, your balance is ${balance}`);
//   }
//   console.log(`Total price is ${totalPrice}`);
// }

//! ======================== task 5 ===================

// let price;

// const country = prompt("Country");
// if (country !== null) {
//   switch (country.toLowerCase()) {
//     case "china":
//       price = 100;
//       console.log(`Delivery to ${country} will cost ${price} credits`);
//       break;

//     case "chili":
//       price = 250;
//       console.log(`Delivery to ${country} will cost ${price} credits`);
//       break;

//     case "australia":
//       price = 170;
//       console.log(`Delivery to ${country} will cost ${price} credits`);
//       break;

//     case "india":
//       price = 80;
//       console.log(`Delivery to ${country} will cost ${price} credits`);
//       break;

//     case "jamaica":
//       price = 120;
//       console.log(`Delivery to ${country} will cost ${price} credits`);
//       break;

//     case "":
//       console.log(`You have to choose country`);
//       break;

//     default:
//       console.log(`We don't have delivery to your country`);
//   }
// } else {
//   console.log(`Was canceled by user`);
// }

//! ======================== task 6 ===================

/* ================== Do while =============== */

// let input;
// let total = 0;

// do {
//   input = prompt("Enter your number!");
//   if (isNaN(input)) {
//     alert(`You wrote not a number`);
//     continue;
//   } else total += Number(input);
// } while (input !== null);
// alert(`total sum of numbers is ${total}`);

/* ================== while (сделал по примеру как делалаи с Андреем)=============== */

// let total = 0;
// while (true) {
//   let input = prompt("Enter your number!");
//   if (input === null) {
//     alert(`total sum of numbers is ${total}`);
//     break;
//   }
//   input = Number(input);
//   if (input === 0 || input) {
//     total += input;
//   } else {
//     alert(`You wrote not a number`);
//     continue;
//   }
// }
