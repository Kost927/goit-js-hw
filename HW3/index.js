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
//   let total = 0;

//   for (let i = 0; i < allProdcuts.length; i += 1) {
//     const values = Object.values(allProdcuts[i]);
//     console.log(values);

//     if (values.includes(productName)) {
//       total = values[1] * values[2];
//     }
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

//! ======================== HW3 Task 7 ======================
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   id: 0,
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     this.id += 1;
//     return {
//       id: this.id,
//       type,
//       amount,
//     };
//     console.log("id", id);
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance < amount) {
//       console.log("снятие такой суммы не возможно, недостаточно средств");
//     } else {
//       this.balance -= amount;
//       const newTransaction = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );
//       this.transactions.push(newTransaction);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     // for (let i = 0; i < this.transaction.length; i += 1)
//     //     if (this.transactions[i].id === id)
//     //         return this.transactions[i];
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) return transaction;
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let totalTransaction = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         totalTransaction += transaction.amount;
//       }
//     }
//     return totalTransaction;
//   },
// };

// // console.log(account.createTransaction(100, Transaction.DEPOSIT));
// account.deposit(200);
// account.deposit(300);
// account.deposit(400);

// account.withdraw(200);
// account.withdraw(300);
// account.withdraw(400);

// console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionTotal("withdraw"));

// console.log(account);

// ====================================== Dop task ==================================
// const cart = {
//   totalCount: 0,
//   summary: 0,
//   products: [],
//   getTotalCount() {
//     let totalProducts = 0;
//     for (const product of this.products) {
//       totalProducts += product.count;
//     }
//     this.totalCount = totalProducts;
//   },
//   getSummary() {
//     let summaryProducts = 0;
//     for (const product of this.products) {
//       summaryProducts += product.price * product.count;
//     }
//     this.summary = summaryProducts;
//   },
//   addProductCount(id) {
//     for (const product of this.products) {
//       if (product.id === id) {
//         product.count += 1;
//       }
//     }
//     this.getSummary();
//     this.getTotalCount();
//   },
//   removeProductCount(id) {
//     for (const product of this.products) {
//       if (product.id === id) {
//         if (product.count >= 1) {
//           product.count -= 1;
//         } else {
//           this.removeProduct(id);
//         }
//       }
//     }
//     this.getSummary();
//     this.getTotalCount();
//   },
//   addProduct(product, count) {
//     this.products.push(product);
//     this.totalCount += count;
//     this.summary += product.price * count;
//   },
//   removeProduct(id) {
//     let filteredProducts = [];
//     for (const product of this.products) {
//       if (product.id !== id) {
//         filteredProducts.push(product);
//       }
//     }
//     this.products = [...filteredProducts];
//     this.getSummary();
//     this.getTotalCount();
//     // for (const product of this.products) {
//     //     if (product.id === id) {
//     //         this.products = [...this.products.splice(this.products.indexOf(product), 1)];
//     //     }
//     // }
//   },
// };
// const product = {
//   count: 1,
//   price: 0,
//   name: "",
//   id: Date.now(),
// };

// ========================================
