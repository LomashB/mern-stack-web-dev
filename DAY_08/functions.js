console.log("Loops Tutorial");

console.log("Hey lomash you are nice!");
console.log("Hey lomash you are good!");
console.log("Hey lomash your course is good!");
console.log("Hey lomash your tshirt is best!!");

function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your course is good!");
  console.log("Hey " + name + " your tshirt is best!!");
  console.log("");
}

nice("lomash");
nice("yash");
nice("sneh");

function sum(a,b){
    console.log(a+b);
    return a+b;
}

sum(3,5)

result1 = sum(9,8)
result2 = sum(7,1)
result3 = sum(1,3)
console.log("the result of sum is: ", result1);
console.log("the result of sum is: ", result2);
console.log("the result of sum is: ", result3);

function sum3(a,b,c=3){
    return a+b+c;
}

result1 = sum3(9,8);
result2 = sum3(7,1);
result3 = sum3(1,3);
console.log("the result of sum is: ", result1);
console.log("the result of sum is: ", result2);
console.log("the result of sum is: ", result3);

// arrow functions

const funct1 = (x)=>{
    console.log("I am arrow function", x);
}

funct1(23);
funct1(31);
funct1(23);