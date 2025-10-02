// Number
// let a = 10;
// let b = 345.6821;
// console.log(b.toFixed(2))  //it will print round of 2 and it gives value in string format
// let c = b.toFixed(2)  // gives output in string format
// console.log(typeof c)  // op string

// console.log(b.toPrecision(5)) //it give 5 value string
// console.log(a.toPrecision(6)) //it gives 10.0000 six precise values

// console.log(b.toString()) //convert integer into string

//
let a = new Number(20); //create number as object why we should not use this method
let b = new Number(20);
console.log(a)
console.log(a==b)  //in object they compare reference but in this case both are indicating to different memory location
let c = a; //here a and b both indicating to same reference 
console.log(c==a)//gives true

console.log(Boolean({})) // gives true because object always give true because it only check the address or reference
console.log(Boolean(null)) //it give false null is also object but no one referencing to it

// Non primitive data always compare through reference
// primitive is copy by value
let x = 10;
let y = x;
console.log(x==y) //compare based on data

// math object
console.log(Math.abs(-2))
console.log(Math.PI);
console.log(Math.LN10); //value of log 10
console.log(Math.SQRT2); // tell sqrt root of 2
console.log(Math.ceil(2.3)) //it opposite of floor take upper
console.log(Math.floor(2.3)) //lpwer value

console.log(Math.random()) 
//generate random value between 0 to 1 where 0 included but 1 is not included.

//
console.log(Math.floor(Math.random()*10))

// Math.floor(Math.rangom()*totalNumberOfOutcome)+shift

//15-25
console.log(Math.floor(Math.random()*11)+15)
// Math.floor(Math.random()*(max-min+1))+min

// OTP Generator 4 digit: 1000-9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);  //we dont use Math.random() to generate otp
// why we dont use math.random because it uses time as a input and do manipulation with it and give us output
//so mostly our system time is not that difficult to guess so we use crypto library for otp generation
