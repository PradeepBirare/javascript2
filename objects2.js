//singleton object
const obj1=new Object()

const user={}
user.id='12abs'
user.name="pradeep"
user.email='pradeep@mail.com'
user.loggedin=false
console.log(user);
console.log(obj1);

//nested objects
const regularuser={
    email:' regula@mail.com',
    fullname:{
        userfullname:{
        firstname:'pradeep',
        lastname:'birare'
        }
    }

}
console.log(regularuser.fullname)
console.log(regularuser.fullname.userfullname.firstname);

// how to merge objects
const obj3={1:'a',2:'b'}
const obj4={3:'c',4:'d'}

//1 methon using assign method

const obj5= Object.assign({},obj3,obj4)

console.log(obj5);
console.log(obj5===obj3);

// 2 method using spread operator starts with {} brackets
const obj6={...obj3,...obj4}
console.log(obj6);

//accessing multiple objects in an array
const arr1=[
    {name:'pradeep'},

    {emal:'pradeep@mail'},

    {id:'1234'},

    {loggedin:'true'}
]

const usrdetail=arr1[2].id
console.log(usrdetail)

console.log(user)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('loggedout'));




const course={
    id:'133e',
    coursename:'javascript',
    price:'free',
    courseInstructor:'pradeep'
}

//object destructure
const {coursename}=course
console.log(coursename)

const {courseInstructor:instructor}=course
console.log(instructor);

console.log(course)

//json =javascript object notation used for api 
//json is in {} brackets









