import { default as users } from "./users.js";

console.table(users);

//! ======================== HW6 Task 1 ======================

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));

/* -----------------------------------------
 */

// const userNames = users.map(function (user) {
//   return user.name;
// });
// console.log(userNames);

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//! ======================== HW6 Task 2 =======================

// const getUsersWithEyeColor = (user, color) => {
//   return users.filter((user) => user.eyeColor === color);
//   // твой код
// };
// console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/* -----------------------------------------
 */

// const getUsersWithEyeColor = function (users, color) {
//   const result = users.filter(function (user) {
//     return user.eyeColor === color;
//   });
//   return result;
// };
// console.table(getUsersWithEyeColor(users, "blue"));

//! ======================== HW6 Task 3 =======================
// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };
// console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/* -------------------------------------------- */

// const getUsersWithGender = function (users, gender) {
//   const result = users
//     .filter(function (user) {
//       return user.gender === gender;
//     })
//     .map(function (user) {
//       return user.name;
//     });
//   return result;
// };
// console.table(getUsersWithGender(users, "male"));

//! ======================== HW6 Task 4 =======================

// const getInactiveUsers = (users) => {
//   return users.filter((user) => user.isActive === true);
// };

// console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/* -------------------------------------------- */

// const getInactiveUsers = users.filter(function (user) {
//   return user.isActive === true;
// });
// console.table(getInactiveUsers);

/* -------------------------------------------- */

// const getInactiveUsers = function (users) {
//   const result = users.filter(function (user) {
//     return user.isActive === true;
//   });
//   return result;
// };
// console.table(getInactiveUsers(users));

//! ======================== HW6 Task 5 =======================

// const getUserWithEmail = (users, email) => {
//   return users.filter((user) => user.email === email);
// };

// console.table(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.table(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

/* -------------------------------------------- */
// const getUserWithEmail = function (users, email) {
//   const result = users.filter(function (user) {
//     return user.email === email;
//   });
//   return result;
// };
// console.table(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.table(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//! ======================== HW6 Task 6 =======================

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age >= min && user.age <= max);
// };

// console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.table(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/* -------------------------------------------- */

// const getUsersWithAge = function (users, min, max) {
//   const result = users.filter(function (user) {
//     return user.age >= min && user.age <= max;
//   });
//   return result;
// };
// console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.table(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//! ======================== HW6 Task 7 =======================

// const calculateTotalBalance = (users) => {
//   return users.reduce(
//     (totalBalance, user) => (totalBalance += user.balance),
//     0
//   );
// };

// console.log(calculateTotalBalance(users)); // 20916

/* -------------------------------------------- */

// const calculateTotalBalance = (users) => {
//   const result = users.reduce((totalBalance, user) => {
//     totalBalance += user.balance;
//     return totalBalance;
//   }, 0);
//   return result;
// };

// console.log(calculateTotalBalance(users)); // 20916

/* -------------------------------------------- */

// const calculateTotalBalance = users.reduce(
//   (totalBalance, users) => totalBalance + users.balance,
//   0
// );
// console.log(calculateTotalBalance);

/* -------------------------------------------- */

// const calculateTotalBalance = users.reduce(function (balance, user) {
//   return balance + user.balance;
// }, 0);

// console.log(calculateTotalBalance);

//! ======================== HW6 Task 8 =======================
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter((user) => user.friends.find((friend) => friend === friendName))
//     .map((user) => user.name);
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

/* -------------------------------------------- */
// const getUsersWithFriend = function (users, friendName) {
//   const result = users
//     .filter(function (user) {
//       return user.friends
//         .find(function (friend) {
//         // console.log(friend);
//         return friend === friendName;
//       });
//     })
//     .map(function (user) {
//       return user.name;
//     });
//   return result;
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//! ======================== HW6 Task 9 =======================
// const copyUsers = [...users].sort();
// const getNamesSortedByFriendsCount = (copyUsers) => {
//   return copyUsers
//     .sort((prev, next) => prev.friends.length - next.friends.length)
//     .map((user) => user.name);
// };

// console.log(getNamesSortedByFriendsCount(copyUsers));

/* -------------------------------------------- */
// const copyUsers = [...users].sort();
// const getNamesSortedByFriendsCount = function (copyUsers) {
//   return copyUsers
//     .sort(function (prev, next) {
//       return prev.friends.length - next.friends.length;
//     })
//     .map((user) => user.name);
// };
// console.log(getNamesSortedByFriendsCount(copyUsers));

//! ======================== HW6 Task 10 =======================

/* -------------------------------------------- */

// const copyUsers = [...users].sort();
// const getSortedUniqueSkills = function (copyUsers) {
//   return copyUsers

//     .reduce(function (acc, user) {
//       acc.push(...user.skills);
//       return acc;
//     }, [])
//     .sort()
//     .filter(function (item, i, skills) {
//       return item !== skills[i - 1];
//     });
// };
// console.log(getSortedUniqueSkills(copyUsers));
