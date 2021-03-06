// Log to console
// DIFFERENT TYPES OF DATA THAT YOU CAN LOG INTO YOUR CONSOLE

console.log('Hello world'); // text
console.log('123');  // numbers
console.log('true');  // booleans

//-----------------------------------------------------------
// DIFERENT WAYS OF ASSIGN A VARIABLE VALUE
// DIFERENT TYPES OF CONSOLE.LOG, CLEAR , WARN .... ETC
//--------------------------------------------------------


// const greeting = 'Hello'; // variable
// console.log(greeting);   // log of the variable
// console.log([1, 2, 3, 4]);  // arrays
// console.log({a: 1, b:2});   // object literals

// console.table({a: 1, b:2}); // it print the object in the console as table 

// console.error('this is some error'); // display our message in red as a error

// console.warn('this a warning');
// console.clear();
// console.time('hello');
// console.log('Hello world');
// console.log('Hello world');
// console.log('Hello world');
// console.timeEnd('hello');

//----------------------------------------------------------------------------
// ASSIGN VALUES OF VAR , LET AND CONST 
// -----------------------------------------

// var , let , const

// var name = "John Doe";
// console.log(name);
// name = 'Marisol'
// console.log(name);

// init var

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);


//  LET

// let name;
// name = "John Doe";
// console.log(name);
// name = 'Marisol'
// console.log(name);

// CONST (CONSTANT)

// const name = 'John'
// console.log(name);


//-------------------------------------------------------------------
// CREATING VARIABLES AND DIFERENT TYPES (type of )
// ---------------------------------------

// PRIMITIVE



// STRING
  const name = 'John Doe';

  // NUMBER

  // const age = 45;

  // BOOLEAN

  const hasKids = true;

  // NULL

  const car = null;


  // undefined 

  let test ;

  //  SYMBOL

  //const sym = symbol();


  console.log(typeof name); // whatever we replace for name with the value of data types on the top 
  // it will give us the the type of PRIMITIVE data 



// REFERENCES DATA TYPES 

// OBJECTS

// const address = {
//     city: 'Boston',
//     state: 'Ma'
// }

const today = new Date(); // this is an object too

// ARRAY

// const hobbies = ['movies', 'music'];


// console.log(typeof address);


// TYPES OF CONVERSION

// let val;

// number to string 
// val = String(5); // to convert a number to a string we have to wrap it in a function string 
// so for legnth to work , we put this into a string function and it will count the numbers inside
// of the parenthesis in this case 1 because there is only one 5 

// OR YOU CAN USE 

// val = (5).toString(); // whatever we pass inside will convert into a string

// output

// console.log(val)
// console.log(typeof val)
// console.log(val.length);

// string to number

// val = Number('5');

// console.log(val)
// console.log(typeof val)
// console.log(val.toFixed());


// SIMPLE MATH

// const num1 = 100;
// const num2 = 50;

// let val;

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// console.log(val);

// MATH OBJECT

// val = Math.PI;
// val = Math.round(2.8)
// val = Math.ceil(2.4);
// val = Math.floor(2.5);
// val = Math.sqrt(64);
// val = Math.abs(-8);
// val = Math.pow(8, 2);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);


// console.log(val);



// CONCATENATION  & APPEND

const firstName = "Felix";
const lastName = "Palacios";
const age = '36';
const str = 'hello my name  is felix';
const tags = 'webs , comics , toys';

let val;

val = firstName + lastName;

// CONCATENATION

val = firstName + '  ' + lastName;

// APPEND

val = 'Brad '   // IN ORDER TO GET THE SPACE BETWEEN THE 
// NAMES YOU HAVE TO GIVE SOME SPACE AFTER THE NAME BRAD THE OUTPUT
// WILL BE : Brad Traversy

val += 'Traversy';  // += plus equal its to append 

val = 'hello, my name is ' + firstName  + ' and i am ' + age;


// ESCAPING

val = 'that\'s awesome, i can\'t wait'; // escaping allow us to put 
// display apostrophe by adding \ 


// LENGTH

val = firstName.length; // give us the number of words on the variable 

// CONCAT 

// a different way to do concatenation is doing this :

val = firstName.concat(' ', lastName);



// CHANGE CASE


val = firstName.toUpperCase(); // everything to upper case
val = firstName.toLowerCase(); // everything to lower case

val = firstName[3] // by putting the number inside of the array , the 
// output will be the letter i starting to count from 0  of the name Felix

val = firstName.indexOf('l'); // with indexof with get the index of the 
// word felix  output = 2

// CHART AT 

val = firstName.charAt('2'); // whit this you can get the result of putting 
// the number inside of the array 

// GET LAST CHAR 


val = firstName.charAt(firstName.length - 1); // wiht this formula you can get 
// the last character 



// SUBSTRING

val = firstName.substring(0, 4) // grab the characters from the name felix
// starting from 0 so the output will be : feli




// SLICE

val = firstName.slice(0, 4);
val = firstName.slice(-3);



// SPLIT

val = str.split(' ');
val = tags.split(',');



// REPLACE

val = str.replace('felix', 'alberto')



// INCLUDES 

val = str.includes('foo');





console.log(val);
