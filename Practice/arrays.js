// let cars = ["BMW", "Audi", "Mercedes", "Tesla"];

import { log } from "node:console";

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
let arr = [3,2,5,8,1];
let n = arr.length;
let i = 0;
let j = n-1;

function revArray(arr) {
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

let res = revArray(arr);
console.log(res);

    