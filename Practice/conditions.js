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

switch(day) {
    case "mon": 
        console.log("7am");
        break;
    case "tue":
    case "wed":
    case "thu":
        console.log("6am");
        break;
    case "fri":
        console.log("9am");
        break;
    default:
        console.log("Weekend");
}