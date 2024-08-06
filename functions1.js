    function addtwonumbers(num1,num2){
       
        return a=  (num1+num2)
        
        //console.log(typeof(num2))
    }
    addtwonumbers(3,7)
    console.log(a)
    
    function loginuser(username="some user"){
        if (!username){  //if(username===undefined)
            console.log("plese enter a username")
            return
        }
        return `${username} just logged in`
    }

    //console.log(loginuser("pradeep")) // if nothing is passed it shows undefined
    console.log(loginuser("pradeep")) // it will override the value in function parameter

    
/// shopping cart function example


function calculatecartprice(...newobject){   // when taking multiple values use (...rest operator)
    return console.log(newobject)
}
calculatecartprice(100,200,300,400)

const user={
    username:"pradeep",
    price:100
}

//1 method to show the object values using function
function handleobject(user){
    console.log(`username is ${user.username } and price is ${user.price}`)
}
handleobject(user)

//2 method using newobject in function

function handleobject2(newobject){
    console.log(`username is ${newobject.username}and price is ${newobject.price}`)
}
//handleobject(user)
handleobject({
    username:'aka',
    price:100
})


const mynewarr=[100,200,160,277]

function secondvalue(getarr){
       //return console.log(getarr)
       return getarr[1]

}
//secondvalue(mynewarr[1])
//console.log(secondvalue(mynewarr));
console.log(secondvalue([112,6337,7865,88]))


//1 method basic arrow function
const multiply =(num1,num2) => {
    return num1 * num2
} // using {}  brackets need to write return keyword
console.log(multiply(2,2))




// 2  method for arrow fuction implicit
//const add= (num1,num2)=> num1+num2
const add= (num1,num2)=> (num1+num2)  // using () paranthesis to make it easier to understand and proper format 

console.log(add(2,3))