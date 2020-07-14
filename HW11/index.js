
//!====================================== TASK 1 =====================================

// const refs = {
//     startBtn: document.querySelector('button[data-action="start"]'),
//     stopBtn: document.querySelector('button[data-action="stop"]'),
//   },
//   colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ],

//   randomIntegerFromInterval = (max) => {
//     return Math.floor(Math.random() * (max + 1));
//   },

//   setRandomColor = () => {
//     const randomColor = colors[randomIntegerFromInterval(colors.length - 1)]
//     console.log(randomColor)
//     document.body.style.backgroundColor = randomColor
//   }

// let interval = undefined


// refs.startBtn.addEventListener('click', function() { 

// interval = setInterval(() => setRandomColor(), 1000)

// refs.startBtn.disabled = true;
// refs.stopBtn.disabled = false;
//     }
// )

// refs.stopBtn.addEventListener('click', function () {
//     clearInterval(interval);

//     refs.startBtn.disabled = false;
// refs.stopBtn.disabled = true;
//     }
// )


//!====================================== TASK 2 =====================================

class CountdownTimer {
    constructor ({
selector, targetDate
    }){
        this.selector = selector
        this.targetDate = targetDate

        this.refs = {
            month: document.querySelector(`${this.selector} [data-value = month]`),
            days: document.querySelector(`${this.selector} [data-value = days]`),
            hours: document.querySelector(`${this.selector} [data-value = hours]`),
            mins: document.querySelector(`${this.selector} [data-value = mins]`),
            secs: document.querySelector(`${this.selector} [data-value = secs]`),
        };

        this.start()
    }

       calcTime (time) {

            const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            this.changeElems(days, hours, mins, secs)
       };

       changeElems (days, hours, mins, secs) {
           this.refs.days.innerHTML = days
           this.refs.hours.innerHTML = hours
           this.refs.mins.innerHTML = mins
           this.refs.secs.innerHTML = secs
       }

       changeDate () {

        const time = this.targetDate.getTime() - new Date().getTime()
            if (time > 0) {
             this.calcTime(time)
}             else {

            this.viewError ()
}

       }

         pad(value) {
        return String(value).padStart(2, "0");
  }

         start () {
            this.changeDate()
            setInterval(() => {
                this.changeDate()
            }, 1000);
         }

         viewError (){
             document.querySelector(this.selector).innerHTML = "time is over"
         }

}


  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 25, 2020'),
  });

//!====================================== TASK 3 - 1 =====================================


// const delay = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve( ms )
//         }, ms)
//     })
// }
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms


  //!====================================== TASK 3 - 2 =====================================

//   const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
  
//     return Promise.resolve(updatedUsers);
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
// //   /*
// //    * Сейчас работает так
// //    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);

  //!====================================== TASK 3 - 3 =====================================

//   const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = transaction => {
//     return new Promise((resolve, reject) => {
//       const delay = randomIntegerFromInterval(200, 500);
//       setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
//         if (canProcess) {
//           resolve({id: transaction.id, time: delay });
//         } else {
//             reject( transaction.id );
//         }
//       }, delay);
//     });
//   };
  
//   const logSuccess = ({id, time}) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
//   };
  
//   const logError = (id) => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
// //   /*
// //    * Работает так
// //    */
// //   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// //   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// //   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// //   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);




