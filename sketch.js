// // arr doesnt have to be defined, it could be named anything
// function calcMean(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }

//   let answer = (total / arr.length)
//   return answer

// }

// let numbers = [10, 13, 14, 22, 51, 100, 73, -123, 0];
// let mean = calcMean(numbers);
// console.log(mean);

// function calcDistance(x1, x2, y1, y2) {
//   let answer = ((x2 - x1)**2 + (y2 - y1)**2) ** 0.5;
//   return answer
// }


let user = {};
let username = prompt("Enter your username");
let password = prompt("Enter your password");

user.username = username
user.password = password

console.log( user )
