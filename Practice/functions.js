// count vowels 
// function countVowels(str){
//     let count = 0;
//     for (let char of str){
//         if (char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.toLowerCase() === "o" || char.toLowerCase() === "u"){
//             count++;
//         }
//     }
//     return count;
// }

import { log } from "console";

// import { log } from "console";


//foreach loop, it is used for normal calc and print the array
// let numbers = [11127881, 2, 3, 4, 5];

// numbers.forEach((num) => {
//     console.log(num * num);
// })

//map , it is used to create a new array based on the original array, it does not modify the original array
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((num) => {
//     return num * num;
// })

//filter, it is used to filter the elements of the array based on a condition
// let numbers = [1, 2, 3, 4, 5];
// let evenNums = numbers.filter((num) => {
//     return num % 2 === 0;
// });
// console.log(evenNums);

// Reduce , it is used to reduce the array to a single value based on a function that takes two arguments, the previous value and the current value
//  let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((prev, curr) => {
//     return prev + curr;
// }
// );
// console.log(sum);

// another example of reduce, it is used to find the maximum value in an array
// let numbers = [1, 2, 3, 4, 5];
// let max = numbers.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// }
// );
// console.log(max);

// marks greater than 90
// let marks = [80, 90, 95, 85, 92];
// let highMarks = marks.filter((mark) => {
//     return mark > 90;
// });
// console.log(highMarks);

//more examples
// let n = prompt("Enter a number:");
// let arr = [];

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

//  let sum = arr.reduce((prev , curr) => {
//     return prev + curr;
// });
// console.log("Sum:", sum);

// let factorial = arr.reduce((prev, curr) => {
//     return prev * curr;
// });
// console.log("factorial:", factorial);

// let num = 0;

// function show(){
//     console.log(num);
//     num++;
//     while(num <= 10){
//     show();
//     }
//     }

// show();

// function facto (){
//     let fact = 1;
//     for(let i=1; i<=num; i++){
//         console.log(`${fact} * ${i} = ${fact * i}`);
//         fact = fact * i;
//         }
//         console.log(`factorial of ${num} is ${fact}`);      
// }
// facto();

//using recursion
// function fact(n) {
//     if (n==0){
//         return 1;
//     } else {
//         return n * fact(n-1)
//     }
// }

// let num = 5;
// let res = fact(num);
// console.log(res);

// let obj = {value: 10};

// function inc(obj){
//     obj.value++;
// }

// inc(obj);
// console.log(obj);

function add () {
    let x = 5;
    function sum () {
        let y = 10;
        console.log(x);
        return x + y;
        
    }
    console.log(x);
    
    let res = sum();
    console.log(res);
}

add();
