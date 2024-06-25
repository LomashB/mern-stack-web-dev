console.log("Conditional tutorial");

let age = 17;
let grace = 2;

age += grace;

if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You can not drive");
}

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);

if (age == 18) {
  console.log("You can drive");
}
// comments

// one line comment
/*
multitine 
comment
*/

if (age > 18) {
  console.log("you can drive");
} else if (age == 0) {
  console.log("are you kidding");
} else {
  console.log("you can not drive");
}

a = 6;
b = 8;

let c = a > b ? a - b : a + b;
console.log(c);

// translates to
/*
if(a>b){
    let c = a-b;
}
    else{
        let c = a+b;
    }
        */
