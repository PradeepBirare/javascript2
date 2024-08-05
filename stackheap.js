// stack stores the copy in memory

let myname="pradeep";
let anothername=myname;
//console.log(anothername);

anothername="pradeepnbirare"
//console.log(anothername);
//console.log(myname);

//heap memeory gives the refrence to the memory 

let user={
    name:"pradeep",
    id:2,
    email:"pradeep@mail.com"
}

let user2=user;
user2.id=3

console.log(user2)
console.log(user);