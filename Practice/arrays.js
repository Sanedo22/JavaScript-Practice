// let cars = ["BMW", "Audi", "Mercedes", "Tesla"];

// import { log } from "node:console";

// for (let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// for of
// for (let car of cars){
//     console.log(car);
// }

// for in
// for (let car in cars){
//     console.log(cars[car]);
// }

// for (let car of cars){
//     console.log(car.toLowerCase()); //we can also use methods on the elements of the array
// }

// avg of numbers in an array
// let nums = [10, 22, 34, 46, 57];

// let sum = 0;

// for (let num of nums){
//     sum += num;
// }

// let avg = sum / nums.length;
// console.log(`The average of the numbers is: ${avg}`);

// value of offer discount
// let price = [1001, 2003, 3004, 4005, 5006];

// let discount = 15;

// for (let i = 0; i < price.length; i++){
//     let dprice = price[i] / discount;
//     price[i] -= dprice;
//     console.log(`The discounted price of item ${i+1} is: ${price[i]}`);
// }

// array methods
// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// fruits.push("Fig"); // adds an element to the end of the array
// fruits.pop(); // removes the last element of the array
// console.log(fruits.toString()); // converts the array to a string

//concate arrays
// let vegetables = ["Carrot", "Broccoli", "Spinach"];
// let food = fruits.concat(vegetables);
// console.log(food);

// fruits.shift();
// fruits.splice(2, 1, "Mango");
// fruits.pop();
// fruits.push("gauva");
// console.log(fruits);

// let nums = [1];

// nums[0] = 5;
// nums[19] = 10;
// nums[27] = 15;

// console.log(nums);
// nums[0] = "Name";
// console.log(nums);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = nums.filter( num => num % 2 === 0)
//     .map( n => n * 2 )
//     .reduce((a,b) => a+b)
//     // .forEach( numb => console.log(numb) );

// //     console.log(res);

// let arr = [1,2,3];
// let str = "1,2,3";
// console.log(arr == str);

// let a  = 10;
// let b = 5;

// // let temp = a ;
// // let b = a ;
// console.log(`before swap ${a} and ${b}`);

// console.log([a,b] = [b,a]);

// rev the array
// let arr = [0,0,0,,1,,];
// let n = arr.length;
// let i = 0;
// let j = n-1;

// function revArray(arr) {
//     while (i <= j) {
//         let temp = arr[i];
//         arr[i] = arr[j]
//         arr[j] = temp;
//         i++;
//         j--;
//     }
//     return arr;
// }

// let res = revArray(arr);
// console.log(res);

// filter array for multiple values
// let arr = [ 0,0,0,1,"dhruv","Dhruv",1,1,2,2,5,5,];

// function filtArray(arr) {
//     let newArray = arr.filter((curr, next) => arr.indexOf(curr) === next);
//     console.log(newArray);

// }
// filtArray(arr);

// let arr = [3,5,8,9,10,5];

// function findMax(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//         max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));

// let arr = [2,10,5,4,7, 10101];

// const output = arr.reduce((acc, curr) => {
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// }, 0);
// console.log(output);

// let arr = ["hi", "hello", "dhruv", "js"];

// let rev = arr.slice(2).map(str => str.split("").reverse().join("")).toReversed();

// console.log(rev);

// let users = [
//   { firstname: "dhruv", lastname: "patni", age: 20 },
//   { firstname: "sandeep", lastname: "pal", age: 23 },
//   { firstname: "rahul", lastname: "solanki", age: 20 },
//   { firstname: "kuldeep", lastname: "rathod", age: 23 },
//   { firstname: "jay", lastname: "patel", age: 35 },
// ];

// let output = users.reduce((res, curr) => {
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(output);

// let output = users.filter((x) => x.age <= 20).map((x) => x.firstname);

// let output = users.reduce((acc, curr) => {
//     if(curr.age <= 20){
//         acc.push(curr.firstname);
//     }
//     return acc;
// }, [])

// console.log(output);

// const bids = [
//   {user: 'Dhruv', amount: 100},
//   {user: 'Saurav', amount: 150},
//   {user: 'Dhruv', amount: 200}
// ];

// function value(bids)
// {
//     let res = {};
//     for(let i of bids){
//         let name = i.user;
//         let amount = i.amount;

//     if(res[name]){
//         res[name] += amount;
//     }
//     else{
//         res[name] = amount
//     }
// }
// return res;
// }

// const res = value(bids);

// console.log(res);

// const result = bids.reduce((acc, bid) => {
//     if(acc[bid.user]){
//         acc[bid.user] += bid.amount;
//     }
//     else {
//         acc[bid.user] = bid.amount
//     }
//     return acc;
// }, {});

// console.log(result);

//output {"dhruv" : 300, "Suarav": 150}

// let bids = [100, "200", 50, "abc", 300];

// let storage = [];
// for (let bid of bids) {
//   let converted = Number(bid);

//   if (!Number.isNaN(converted)) {
//     storage.push(converted);
//   }
// }

// console.log(storage);

// const a = {name: "dhruv"};

// a.name = "sandeep";
// // a.name = 69;

// console.log(a);

// let calculator = {
//     read() {
//         this.a = +prompt("enter first number", 0);
//         this.b = +prompt("enter second number", 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let chain = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },

//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// chain.up().up().down().showStep().down().showStep();

// function Accumulator(startingValue) {
//         this.value = startingValue;

//         this.read = function() {
//             this.value += +prompt("enter value", 0);
//         };
// }

// let acc = new Accumulator(0);
// acc.read();
// acc.read();
// alert(acc.value);

// let a = [5];
// let b = "dhruv"
// console.log(a-b);

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });

// let arr = "my-long-word";

// function long(arr) {

//     return arr.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
// }

// let res = long(arr);
// console.log(res);

// let arr = [1,5,7,9,];

// function filterRange(arr,a,b) {
//     return arr.filter(item => (a <= item && item <= b));
// }

// let filtered = filterRange(arr, 5, 8);
// console.log(filtered);

// let arr = [5, 2, 1, -10, 8];

// function sorting(arr) {
//     return arr.slice().sort((a,b) => b - a);
// }

// let sorted = sorting(arr);
// console.log(sorted);
// console.log(arr);

// function Calculator () {
//     this.methods = {
//         "-": (a,b) => a - b,
//         "+": (a,b) => a + b
//     };

//     this.calculate = function(str){
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];

//         if(!this.methods[op] || isNaN(a) || isNaN(b)){
//             return NaN;
//         }

//         return this.methods[op](a,b);
//     };

//     this.addMethod = function(name, func) {
//         this.method[name] = func;
//     };
// }

// let sum = new Calculator;
//  let res = sum.calculate("10 + 8")
// console.log(res);

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

let sum = calc.calculate("10 - 9");
console.log(sum);
