const arr1=[1,2,3,45,6]

const arr2=new Array(1,3,5,6,7)
console.log(typeof(arr1));
console.log(arr2);

arr1.push(2);
//console.log(arr1);
arr2.pop();
//console.log(arr2)
arr2.shift(2);
//console.log(arr2);
arr1.pop();
//console.log(arr1);
arr1.push(10) // adds/inputs elements in last of array  
console.log(arr1);
arr1.unshift(0)// adds/inputs element in start of array
console.log(arr1)
arr1.shift()// delete the  start element in an arry  
console.log(arr1);
arr1.unshift(0);
console.log(arr1);
arr1.shift(3);
console.log(arr1);
arr1.pop(5)  // delets the array in the last elements
console.log(arr1);
arr1.push(10)
console.log(arr1);
arr1.pop(4)
console.log(arr1);
const arr3=arr1.join(arr2)
let arr4=['h','e','l','l','o']
let arr5=['w','o','r','l','d']
let arr6=arr5.join(arr4)
//console.log(arr6);


//console.log(arr3);

console.log(arr1)
const arr7= arr1.splice(2,3); // it take all the values from start indes and last index and print it 
console.log(arr7);            //by changing the original array 

arr1.push(3,4,5,6,7,8,9)
console.log(arr1)
let arr8 =arr1.slice(3,5)  // takes the element from start index and last index but dont print the last elment in output not cahnge the oiginal array 
console.log(arr8);
console.log(arr1);

let arr9=new Array(1,2,3,4,5)
let arr10=new Array(6,7,8,9,10)

let arr11=arr9.concat(arr10) // it concats/merege the  2 arrays 
console.log(arr11);

let arr12=[...arr9,...arr10] // (... spread operator ) can also be used to merge two arays
console.log(arr12);

let a ,b,c 
a=1
b=3
c=4
console.log(Array.of(a,b,c));

let d=["hello"]
let x=console.log(Array.from('pradeep'))
//console.log(x);






















