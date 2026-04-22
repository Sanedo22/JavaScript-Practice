// let num1 = 5;
// let num2 = 10;
// let num3 = 15;
// let result;

// if(num1 > num2) {
//     console.log("Num1 is greater");
// }
// else if (num2 > num3 ) {
//     console.log("num2 is greatest"); 
// }
// else {
//     console.log("num3 is greatest");
// }

// result = num1%2===0 ? "Even" : "Odd";
// console.log(result);

let day = "sat";

// if (day === "mon") {
//     console.log("7am");
// }
// else if (day === "tue" || day === "wed" || day === "thu") {
//     console.log("6am");
// }
// else if (day === "fri") {
//     console.log("9am");
// }
// else {
//     console.log("Weekend");
// }

// switch(day) {
//     case "mon": 
//         console.log("7am");
//         break;
//     case "tue":
//     case "wed":
//     case "thu":
//         console.log("6am");
//         break;
//     case "fri":
//         console.log("9am");
//         break;
//     default:
//         console.log(`today
//             is
//             weekend`);
// }

// let i = 1;
// let temp = 1;

// while(temp<=5) {
//     console.log(i);
//     console.log(temp);
    
//     temp++;
// }

// let a = "*";

// //print a star pattern
// for(let i=1; i<=10; i++) {
//     let str = "";
//     for(let j=1; j<=i; j++) {
//         str += a;
//     }
//     console.log(str);
// }

// let i = 1;

// for(i = 1;i<=10; i++) {
//     console.log("Hi", i);
//     i++;
//     i++;
    
// }

// let a = "*";

// for(let i = 1; i<=5; i++){
//     let b = "";
//     for(let j = 1; j<=i; j++){
//         b +=a;
//     }
//     console.log(b);
// }

//print a triangle pattern, starting from center
// let a = 5;

// for(let i = 1; i<=5; i++){
//     let b = "";
//     for(let j = 1; j<=i; j++){
//         b +=a;
//     }
//     console.log(b);
// }

// function user(name, age) {
//     return `Hello ${name}, you are ${age} years old`;
// }

// let name = "Dhruv";
// let str = user(name);
// console.log(str);

// let add = function(num1, num2) {
//     return num1 + num2;
// }

// let sum = add(5);
// console.log(sum);

//add function with negative numbers getting add

// function add(num1, num2) {
//     if(num1 < 0 || num2 < 0) {
//         return "Negative numbers are not allowed";
//     }
//     return num1 + num2;
// }

// let sum = (num1, num2) => Math.abs(num1) + Math.abs(num2);

// console.log(sum(-5, -10));

let laptop1 = {
    cpu: "i7",
    ram: "16gb",
    brand: "Dell",

    getConfig: function() {
        console.log(this.cpu);
        
    }
}

let laptop2 = {
    cpu: "i5",
    ram: "8gb",
    brand: "HP",

    getConfig: function() {
        console.log(this.cpu);
    }
}

laptop2.getConfig();