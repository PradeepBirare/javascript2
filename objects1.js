//oject literals
//obect.create (constructor method) object creation
//ojects are has key value pairs in javascript

// to declare a symbol
const mySym= Symbol()
// to use a symbol in objects you have to  create it in [] brackets

const Juser={
    name:"pradeep",
    age:18,
    'surname':'birare',
    [mySym]:"key2",
    location:"Mumbai",
    email:"pradeep@gmail.com",
    isloggedin:false,
    lastlogindays:["Monday","Sunday"]

}  // object is declared/created

//how to accessv values in objects
//1 method
console.log(Juser.name)

//2 method
console.log(Juser['name']);// use "" to access it in case of [] brackets 
console.log(Juser['age']);
console.log(Juser['surname']);
console.log(Juser[mySym]);

//Object.freeze(Juser) //to frezze the values ogf the object
//to change values in object
Juser.email="chatgpt@.com"

console.log(Juser.email);
Juser.greeting=function(){
    console.log("hello world")
}

console.log(Juser.greeting());

Juser.greeting2=function(){
    console.log(`hello user ${this.name}`)
}
console.log(Juser.greeting2());




