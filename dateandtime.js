let mydate=new Date()
console.log(mydate);//2024-07-31T08:24:00.727Z
console.log(mydate.getDate()); // OT:-31
console.log(mydate.toDateString())//OT:-Wed Jul 31 2024
console.log(mydate.toString());//Ot:-Wed Jul 31 2024 13:52:32 GMT+0530 (India Standard Time)
console.log( mydate.toISOString());//2024-07-31T08:24:00.727Z
console.log(mydate.toLocaleString());// 31/7/2024, 1:54:00 pm
console.log(mydate.toLocaleDateString());//31/7/2024
console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());//13:56:13 GMT+0530 (India Standard Time)
//in javascript moths start from 0-11
let createdate =new Date(2024,7,12);
console.log(createdate.toDateString());
