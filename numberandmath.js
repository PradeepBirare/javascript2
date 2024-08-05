var score=100
const balance= new Number(100)
console.log(typeof(score));
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(4));// gives output in decimal/floating point ex:- 1=1.00 if fixed(2) 
//console.log(typeof(balance));

const otherno= 247.2
console.log(otherno.toPrecision(8));//its take values round it of if point value is greater than 5 +1 the given value
//if precision is 2 takes 2 starting numbers  if 

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));

var a
console.log(Math.max(1,4,9,3,8,8));
console.log(Math.abs(-44.0));//takes the original value no changes just make negative values in positive

//Formula  of random
//console.log(Math.random());// gives values under 0 and 1
//console.log(Math.random()+1); // this will give value with +1 
//console.log(Math.random()*10);// gives value between 0 to 10
//console.log(Math.random()*10+1);//this will give vuales between 1 to 10 
const min=10
const max=20
//console.log(Math.floor(Math.random()*(max-min+1)+min));
console.log(Math.random(1,2,3,4,5,6,7))




