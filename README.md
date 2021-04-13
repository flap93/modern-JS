# modern-JS
This is a course from Udemy

# what are Frameworks ?

Frameworks are code libraries, that provide developers with pre-written JS code to use
for routines programming , features abd tasks.

# script tag 

is how we link our html file with our JS file.
and run it in our live server.
Example : <script src="app.js"></script>

# Console on google  chrome 

on the console we can run commands too ,
same as we did  the alert function we can run it on the console too , as well as adding numbers ex:1+1 .
one that i liked it was document 
typing document on the console , it will give us the whole structute of the Html , and if we want to select something from the DOM  we can do that throught here .
EXAMPLE : document.querySelector('h1').style.color = "red" .
this way we will access to the h1 tag in the HTML file from our 
JS file


# Log console.log - console.table- console.error

We can log into our console letters , number , booleans ,variables, arrays , objects literals

table print our object result in the console as a table 

error print our message in red as a error

clear(); this cleans our console in google chrome 

time & timeEnd whatever we put between this two , it will tell us how long it took to run the lines of code ;

warn , it prints a warning in our console 



# VAR , LET , CONST

with var or let we can reassing variables using var or let,
we can  assign variable

the only characters that a VAR can hold is letters , numbers , _ & $ .

A variable can not start with a number so never name your variable with a number 

the differences between them are that 
VAR and LET are mutuable variables and 
CONST is unmutuable variable 

# what is Global scope and Local scope 

Global means that can be accessed and modified anywhere in the program and local variables CANT be accessed outside of the functuon declaration . Global variable and local variable can have same name without affecting each other. JavaScript does not allow block level scope inside { } brackets.

# what is scope 
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block

# Data types

there are two types :

- PRIMITIVE DATA TYPES :
stored directly in the location the variable accesses stored on the stack

- REFERENCE DATA types :
Acceses by reference objects that are stored on the heap a pointer to a location in memory 

* PRIMITIVE DATA TYPES :
- STRING
- NUMBER
- BOOLEAN
- NULL
- UNDEFINED
- SYMOBLS (ES6)

* REFERENCES DATA TYPES:
- ARRAYS
- OBJECT LITERALS
- FUNCTIONS
- DATES
- ANYTHING ELSE

we can console.log(typeof _____) amd we this now the type of variable that is it.

# TYPE CONVERSION

.length only works on strings because is string method-propertie
it gives you the nymber of characters on the string

