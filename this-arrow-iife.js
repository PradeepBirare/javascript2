const user={
    username:'praderp',
    price:'855',
    message: function(){
       console.log(`this is usernsme ${this.username} and price ${this.price}`)// this refer to current context

       console.log(this); 
    } 
    
}
user.message()
user.username='sam'
user.message()
console.log(this);

console.log(this.user)

function one(){
    console.log(this)   // we can not use this keyword in function
}

one()



//Arrow function

const one1=function(){
    console.log("pradeep") //normal function
}

const two=()=>{
    let username="pradeep"
    console.log(`user ${username}`)
}
two()

const addno=(num1,num2)=>{
     return num1+num2
}
console.log(addno(2,1))

const multiply=(num1,num2)=> num1*num2

console.log(multiply(2,2))

const divide=(num1,num2)=>(num1/num2)  //divide gives quotient

console.log(divide(8,2))

const modulus=(num1,num2)=>(num1%num2)  //modulus gives remainder

console.log(modulus(8,2))


const evenodd=(checkno)=>{
   
    if (checkno%2===0){
        return console.log("its even")
    }

    else{
         console.log("its odd");
        
    }

}
evenodd(45)

const two2=()=>{
    console.log(this)
}
two2();

// immmediately invoke  function expression (IIFE)

function database(){
    console.log("database coonected");  //normal function declaration
    
}
database();

(function database3(){
    console.log("database3 coonected");  //IIFE function declaration
    
})();

(function database2(){
    console.log("database2 coonected");  //IIFE function declaration
    
})();


//unnamed IIFE declaration

((user)=>{
console.log("username is" ,user)
console.log((`username is ${user}`));

})('pradeep');



