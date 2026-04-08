let num = prompt("Enter a number");

// let table = "";

// for(let i=1; i<=10; i++){
//     table = num + " x " + i + " = " + (num * i) + "\n";
//     console.log(table);
// }

let factorial = 1;
for(let i=1; i<=num; i++){
    factorial = factorial * i;
}
 console.log(factorial);