// Srrings
// const str1 = "Rohan"; //here we can't write in multiple line
// const str2 = 'Rohit Negi';
// const day = 18;
// const str3 = `Strike 
// is coming in ${day}
//   `; // modern way using bactic
// console.log(str3)


// const str = `Hello Coders`;
// console.log(str.length)  //length of string
// console.log(str[1])

// //upper case
// console.log(str.toUpperCase()); //it always give new string

// //lower case
// console.log(str.toLowerCase())

// const str = `Hello Coders`;

// console.log(str.indexOf('der'));  //give index of element if it is present else give -1
// // ahd always give first index
// console.log(str.indexOf('D')); //give -1 always convert the string in upper cas

// console.log(str.lastIndexOf('o')); //it tells the last index where the string start

// console.log(str.includes('Cod')); //it give whether the substring is present or not and give true and false

// //slice
// console.log(str.slice(2,6));  //it give a string after slicing

// console.log(str.slice(3));

// console.log(str.slice(-4));  //last 4 characters

// console.log(str.substring(2,5)); //it also give substring but we cant mark negative index here

// a = "hello"
// b = "w"
// const c = a + " " + b;
// console.log(c);

// console.log(str.replace("ode","iam"));  // it replace only starting one
// console.log(str.replaceAll("ode","iam")); //it replaces all these substring

// const user = " Mayta ";
// console.log(user.trim());  // trim  the starting and ending white space
// console.log(user.trimStart()) //trim only starting whitespace
// console.log(user.trimEnd()) //trim ending whitespace


// const names = "Rohit,Mohit,Arhi,fa"

// console.log(names.split(",")) // split it in bases of comma and give in a array

// //Date and time
// const now = new Date(); //it shows time in utc(univeral time coordinates)
// console.log(now);

// console.log(now.toString());
// // console.log(now.toLocaleString());
// // console.log(now.toISOString());
// // //local time
// // console.log(now.getDay()); // it started with 1 index
// // console.log(now.getFullYear());
// // console.log(now.getMonth())  //month start with 0 base index
// // console.log(now.getHours());


// // days: Mon-tue (1 based)
// // Month: 0 1   //these are inconsistency in date

// // year month date hour minute second millisecond
// const n = new Date(2025,8,25,8,25,16,125);
// console.log(n);

// const no = new Date();
// console.log(no.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);


//TimeStamp
const now = Date.now();
const dates = new Date(0)
console.log(dates.toString());
// console.log(now); //date in miliseconds
// 1759438956618
