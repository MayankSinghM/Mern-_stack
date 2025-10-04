// Array

// let marks = [100,50,70,80,90]; // we can also use hetrogeneous data inside it

// console.log(marks);
// console.log(marks.length);

// // let arr = [100,30,"Rohit",true]; // we using heterogeneous data

// // console.log(arr);

// console.log(typeof arr);  //object

// arr[1] = 90;
// console.log(arr);


// //push - add element at the end of the array
// arr.push(20)
// console.log(arr)

// //pop - delete element from the end of the array

// arr.pop(20);
// console.log(arr);

// // can we add starting element or delete it

// arr.unshift(10); //add element at the starting of the array
// console.log(arr);

// arr.shift(); //it delet the first element of the array
// console.log(arr);

// it is advise to not use shift and unshift because it hamper the performance

// let arr = [10,30,40,60];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for (let num of arr){
//     console.log(num);
// }

// arr2 = arr;
// arr2.push(10);  //it also do chamges in arr because it is pass by referemce

// console.log(arr);  //so it is also change in arr

// Non primitive : copy by reference
// primitive data : copy by value

// const arr = [13,45,6,5,44,44];
// arr = [23,55,35,5] // we can;t to do thid when we define it using the const

// const arr = [13,45,6,5,44,44];
// const arr2 = arr.slice(2,4);
// console.log(arr);

// const arr3 = arr.splice(1,3,"Rohit",19) //trim starting three index
// console.log(arr) // when we use splice it changes in orginal array

// const arr = [13,45,6,5,44,44];
// const arr2 = [23,53,53,32]
// const arr3 = [34,'a']
// const arr4 = arr.concat(arr2,arr3); //provides a new array by adding prevous one

// console.log(arr4);

// const arr6 = [arr,arr3,arr2] //it provides a array inside the array there are three arrays
// console.log(arr6)


// //spread operator

// const arr5 = [...arr,...arr2,...arr3]; //it provide the items in a single array
// console.log(arr5);

//converting array into string

// const arr = ['Alice',"bob",'fds']

// // console.log(arr.toString())

// // console.log(arr.join('='))

// console.log(arr.indexOf("bob"));  // it element not present it gives -1 and if there are multiple element last it gives first index
// console.log(arr.lastIndexOf("bob"));
// console.log(arr.includes("Bog")); // it tell whether the element is present or not in the array

// //Ascii table in which small a start with 97 and capital A from 92
// console.log(arr.sort());  //sort like dictionary but with ascii values

// console.log(arr.reverse())  //it prints in reverse order


// arr.sort()
// arr.reverse()
// console.log(arr)

// const a = [101,90,80,32,91];
// // so the rule for sort method is takes all things as strings and sort them in basis of character by character
// a.sort(); //it treats them in the basis of character
// console.log(a)

// const arr = [101,90,80,32,91];
// arr.sort((a,b)=> a-b); //so we use this so the sort work fine
// // ascending order
// console.log(arr)
// //for descending order
// arr.sort((b,a)=> b-a);

// // in case of -ve: first a will come than b
// // in case of +ve: first  b will come than a


const arr = [10,30,40,[13,34,[30,303,53]],45]; //it is type of 2d array

console.log(arr[3][2][0]); // accessing the element of arrya inside array insid array 3d array

a = arr.flat(Infinity) //it flat array at a particular level
console.log(a);

//array is not array in javascript it is a object because it is not stored values in contigous memory location
//also we can change the values inside it and also we can stored value in form of key-value pair



