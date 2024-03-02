// console.log('Hello world')

// // ctrl / makes selected into a comment

// // these are variables
// let firstName = 'alex';
// let lastName = 'Oliver';
// let age = 21;

// //prints to the screen
// console.log(firstName, lastName, age);

// /*this is a multi-line comment
// it can span mutilple lines
// and is used for longer comments*/

// // this is a single line comment

// console.log(20 * 30);
// // multiply
// console.log(5 / 2);
// //divide
// console.log(5 + 5);
// //add
// console.log(5 - 5);
// //subtraction

// console.log('my name is ' + firstName + " " + lastName + ' and i am ' + age + ' years old.')

// // modular operator examples
// console.log(5 % 2);
// //remainder is 1
// console.log(5 % 3);
// // remainder is 2

// console.log(`my name is ${firstName} ${lastName} and i am ${age} years old.`)
// // easy way, ${variable} with the ` button


// console.log(age > 50);

// //shorthand assignment 
// age += 40;

// //
// age -= 40;

// //true
// 5 == "5"
// //fasle
// 5 != "5"

// //flow control

// let now = new Date()
// let hour = now.getHours()

// if (hour < 7) {
//     console.log('its very early')
// }

// else if (hour < 12) {
//     console.log('Good morning')
// }

// else if (hour < 18) {
//     console.log('good evening')
//     console.log('enjoy your evening')
// }

// else if (hour > 18) {
//     console.log('good evening')
//     console.log('enjoy your evening')
// }

// else if (hour > 22) {
//     console.log('Bed time')
// }

// // && is a logical operatior for AND
// if (age >= 18 && age <= 30) {
//     console.log('you can drink')
// }

// // || is a logical operator for OR
// if (age >= 18 || age <= 30) {
//     console.log('you can drink')
// }

// let isOld; 
// if (age >= 18) {
//     isOld = true
// }
// else {
//     isOld = false
// }

// //short version, conditional operator 
// let isOld2 = age >= 18 ? true : false;

// //2 options
// if (firstName == "nick" || firstName == "alex") {
//     console.log('you are confirmed');
// }

// let month = 7 //now.getMonth();
// console.log(now.getMonth());

// //switchcase block
// switch (month) {
//     case 11:
//     case 0:
//     case 1:
//         console.log('winter');
//         break;
//     case 2:
//     case 3:
//     case 4:
//         console.log('spring');
//         break;
//         case 5:
//         case 6:
//         case 7:
//             console.log('summer');
//             break;
//         case 8:
//         case 9:
//         case 10:
//             console.log('fall');
// }

// //looping

// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// //counter/test/increment
// // for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// control / comments it all out

// make sure function is the name of what it is going to do
//also comment in what you're doing so future you knows whats going on
function sayHello(firstName, lastName){
    console.log('hello' + firstName + "" + lastName);
}

// sayHello(" Alex", "Oliver");
// sayHello(" Zack", "Todd");

let nickName = createMessage("Nick", "Todd");
let zackName = createMessage("Zack", "Todd");
let alexName = createMessage("Alex", "Oliver");

console.log(nickName);
console.log(zackName);
console.log(alexName);

// function createMessage(firstName, lastName) {
//     return "hello " + firstName + " " + lastName;
// }

//parameters and local variables are only in the scope inside the function 
// let variables are stored in the whole file
let age = 21;
function sayHello(firstName, lastName){
    console.log('hello' + firstName + " " + lastName + " you are " + age + " years old");
}

console.log (i);
let height = 1.4;
console.log("hello " + firstName + " you are " + age + " years old and you are " + height + "m tall");

// global scope - can see it everywhere
// parameters and local variables are only in scope inside the function
function sayHello(firstName="Nick", lastName="Todd")
    // var is a locally scoped variable visible to the entire function, even if declared in
    // a block such as a for loop
    for (var i = 0; i < 5; i++) {
        console.log(i);
        var height = 1.4;
    }
    console.log("hello " + firstName + " " + lastName + " " + age + height);

// Objects

// making a date object
// Date is a class
// we make an instance of the class with the new keyword
// call the constructor with the new keyword
let now = new Date();
// use the . to access the properties or methods of the object
let hours = now.getHours();
console.log(hours);
let minutes = now.getMinutes();
console.log(minutes);

    //template
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    
        sleep() {
            console.log(this.firstName + " is sleeping");
        }
    
    }
    
    let me = new Person("Nick", "Todd");
    let zack = new Person("Zack", "Todd");
    let alex = new Person("Alex", "Oliver");
    
    me.sleep();
    zack.sleep();
    alex.sleep();