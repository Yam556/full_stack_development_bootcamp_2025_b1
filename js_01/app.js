/* 
Literals - to check literals use -typeof in console */

// 01. string literals --anytghing inside single or double quotation
//--"sandesh", "welcome to nepal", "b";

// 02. Numeric literals -- numbers
// -- 100, 202.22

//Boolean literals
//true or false result

// Array literals
// ["sunday", 'monday', "tuesday", 122, false]

//object literals {}

/* 

key: value

object{
firstName: "Yam",
age: 26, 
degree: "Bachelor"
isStudent: yes
address: {
street: "haris street",
unit: 10,
state: "NSW"
} object inside object can be created in above method
}
*/
//regEx literals
// --- /a-zA-Z0-9/
/*
let regex = /hello/i;  // Matches 'hello', 'Hello', 'HELLO', etc.
let result = regex.test("Hello World");
console.log(result); // true */

//variable
//declaration
//assignment

var firstnumber;
firstnumber = 500;
console.log('This is the highest number: ' + firstnumber);

let phone = '0426733324';
console.log('my phone number is: ' + phone);
console.log(phone);



//string Manipulation

let name = "Yam";
let greeting = "Hello";
let email = "yamk6285@gmail.com";

console.log(`${greeting} ${name}, how are you?`);

console.log("my name is " + name + " and my email address is " + email +".");
 const bio = `${greeting} ${name}, how are you?`;
console.log(greeting.toLocaleUpperCase());
console.log(email.length);
console.log(bio.split(".").length)


//returning last item/ character
console.log(email[email.length-1]);

var fullName = "Yam Bahadur Khadka";
/*
let firstName = fullName.split(" ")[0];
let middleName = fullName.split(" ")[1];
let lastName = fullName.split(" ")[1];
console.log("firstName = "+ firstName);
console.log("middleName = " + middleName );
console.log("lastName = " + lastName );

console.log({
    firstName,
    middleName,
    lastName
})
*/
const firstname = fullName.slice(0, fullName.indexOf(" "));
const middleName = fullName.slice(fullName.indexOf(" ") +1, fullName.lastIndexOf(" "))
const lastName = fullName.slice(fullName.lastIndexOf(" ") + 1, fullName.length)
console.log({firstname,
    middleName,
    lastName
})



// ++ increment and decrement 
let x = 1;
//++x === x = x + 1; first it will increase the value of x first.
y = x++;
// x++ === , first it will assign the value and the increase the value of x.

console.log(y)// y = 1 ; first it will assign the original value of x to y.
console.log(x)// x = 2; after assigning the value it will then start to increase the value.

let a = 5;
console.log(a**4);// power of a is 4 ; a * a* a * a

a += 100; // a = a + 100 adding 100 to the previous value of a and returning new value of a after adding.
a -= 100; // a = a - 100 subtracting the prognal value of the a with 100.

let essay = "My name is Yam Khadka and ";
essay += "I am from Nepal";
console.log(essay);