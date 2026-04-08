// let str = "Hello, World!";
// console.log(str.length); it is a string property that returns the number of characters in a string, including spaces and special characters. It is used to determine the length of a string in JavaScript.

//template literals
// let obj = {
//     name: "Dhruv Patni",
//     age: 20,
// };

// let output = `my name is ${obj.name} and i am ${obj.age} years old`; string interpolation is the process of embedding expressions within string literals, allowing for dynamic content generation.
// console.log(output);

//escape characters
// let str = "Hello\\World";   \n, \t, \\, \', \" are examples of escape characters in JavaScript. They allow you to include special characters in a string without causing syntax errors or unintended behavior.
// console.log(str);

// string methods, strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. However, you can create new strings based on existing ones using various string methods. 
// let str = "Hello, World!";
// console.log(str.toUpperCase()); // converts the string to uppercase letters.
// console.log(str.toLowerCase()); // converts the string to lowercase letters.
//console.log(str.trim()); // removes whitespace from both ends of the string.
// console.log(str.charAt(0)); // returns the character at the specified index.
// console.log(str.indexOf("World")); // returns the index of the first occurrence of the specified substring.
// console.log(str.lastIndexOf("World")); // returns the index of the last occurrence of the specified substring.
// console.log(str.slice(0, 5)); // returns a substring of the string from the specified start index to the specified end index.
// console.log(str.split(" ")); // returns an array of substrings based on the specified separator.

//practice
// let userName = prompt("Enter your name:");

// let newName = userName.trim() .toLowerCase() .replaceAll(" ", "");

// console.log(`Your Username is: @${newName}${newName.length}`);