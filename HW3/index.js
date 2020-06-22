//! ======================== HW3 Task 1 ======================

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// // for (const key in user) {
// //     console.log("key: ", key);
// user["mood"] = "Happy";
// console.log(user.mood);

// user["hobby"] = "skydiving";
// console.log(user.hobby);

// user["premium"] = "false";
// console.log(user.premium);

// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log("Key: ", user[key]);
// }

//! ======================== HW3 Task 2 ======================

// const countProps = function (obj) {
//   console.log(obj);
//   return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//! ======================== HW3 Task 3 ======================

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);

//   let name = "";
//   let value = 0;
//   for (let element of entries) {
//     console.log(element);
//     if (element[1] > value) {
//       value = element[1];
//       name = element[0];
//     }
//   }

//   let BestEmployee = {};
//   BestEmployee.name = name;
//   BestEmployee.value = value;

//   return BestEmployee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

//! ======================== HW3 Task 4 ======================
// const countTotalSalary = function (employees) {
//   let sum = 0;
//   for (let salary of Object.values(employees)) {
//     sum += salary;
//   }

//   return `total salary of employees: ${sum}`;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

//! ======================== HW3 Task 5 ======================
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const entries = Object.entries(arr[i]);

//     for (const entrie of entries) {
//       if (entrie.includes(prop)) {
//         result.push(entrie[1]);
//       }
//     }
//   }
//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

//! ======================== HW3 Task 6 ======================
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let values = Object.values(allProdcuts);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }

//   console.log(total);

//   console.log(values);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

//! ======================== HW3 Task 7 ======================
