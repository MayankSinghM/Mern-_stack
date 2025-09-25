// variable ko kese bnate hai


// let name = "Rohit";
// let age = 20;
// //we can change the value of let variable

// age = 30;

// console.log(name,age);

// //we can't change the value of const variable after initializing it using const
// const account =1234;
// account = 0; // error
// console.log(account);


// old way of assigning variable in javascript
// the problem is we can declare variable multiple time and it doesnt give any error that is a bad thing

// var a =10;
// var a=20;

// it will give output 20 even in global scope
// variable only have function scope and global scope


// if(true){
//     var a=10;
// }


// cant access outside the function

// function x(){
//     var a=20
// }

// console.log(a);

// so that why we dont use var now days 
// we use let and const now days if we want to chagne the value later we use let and we want it static then we use const


//data types in java script

//1. Primitive data types
// Number,string,boolean,undefined,null,bigint,symbol

// a.Number
let num1 = 10;
let num2 = 20.5;
console.log(num1,num2);
console.log(typeof num2); // we can check the data type


// b.String
let str1 = "rohit";
let str2 = 'anjali';
console.log(str1,str2);
console.log(typeof str1);

// c.Boolean
let login = true;
let f = false;
console.log(login,f);
console.log(typeof f);

 // d.undefined

let user=undefined; // if we declare a variable but not assign any value inside it then it automatically assing undefined
// const p;  // in the case of const it give a error because const doesnt declare variable untill we define a value in it and also we cant assign undefine in const
console.log(user);
console.log(typeof user);

// e. bigint
// so the numbers which are very large and can cone in 8 byte we store them using bigint
let n= 124565463423423435465654342344n;
console.log(n);
console.log(typeof n);


// f.null

let weather = null; // it means nothing or empty value when doesnt want to assing anything in variable
console.log(weather);
console.log(typeof weather); // it gives the type object it is more famous bug which doesnt solve because if we solve it many old code can phat sakte hai


// let weather = currentWeather("Dwarka")
//25
// null
// undefined

// g.symbol
//used to create unique values

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1==id2);// false both give different values
console.log(id1);
console.log(typeof id1);


//2. Non primitive data types

// array,object,function
// a. array

let arr =[10,20,40,'Rohit',true]; // can store multiple values of different data types
console.log(arr);
console.log(typeof arr); //it gives object as output

// b.object //it is the foundation

// Rohit 1234 18 gen // we simply dont understand the meaning of these values so now we use object

// object is store values in key value pair

let obj = {
    name: "Rohit",
    accountNo: 1234,
    age:18,
    category: "gen"
}     // now we can easily understand the meaning of these values which cant done using array
console.log(typeof obj);
// c.function

function add(){
    console.log("hello");
}
add(); //call the function


// we can store function inside variable

let s = function add(){
    console.log("hello");
}
s(); 
console.log(s);
console.log(typeof s);  // it gives function as output but it is also a object type


//  so all the primitive data types has there own datatype except null its data type is object
// but all the non primitive data types has object as there datatypes

//primitive data types are immutable means we cant change them at run time 

let a=10;
a=20;
console.log(a); //it will give 20 but it doesnt change the value of 10 in memory but a new memory created for 20 and a is indicating 20 or pointing to 20


// how can we prove it

let R='Rohit';
R[0]='M';
console.log(R); // it will give Rohit because we cant change the value of string


// Non primitive data types are mutable means we can change them
//example
let arrs =[10,20,30];
arrs.push(40);
arrs[0]=100;
console.log(arrs);


let de={
    name:"Rohit",
    age:20
}
let obj2=de; // it doesnt make a new copy for obj instead it point to the same memory location so if we do change in object2 then same change is seem in the de
de.name ="ANjali"; // it will make name anjali in main memory 
obj2.name="neha"; // it will change name neha in main memory
console.log(de.name); //it will five neha
console.log(de.age);

// so non primitive data types can very large in size so make there multiple copy can create problem in memory means memory can be less and we make too many copy then programm can be crash








