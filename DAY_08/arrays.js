console.log("Arrays in JS");

let arr = [1,2,3,6,7,8];
    //     0 1 2 3 4 5 index
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);

// mutable
arr[0] = 9;
console.log(arr);

// immutable
a = "lomash"
a[1] = "w"
console.log(a)

console.log(arr.toString())
console.log(arr.join(" and "))

arr_pop = arr.pop()


delete arr[5]
console.log(arr)

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

concated = a1.concat(a2,a3)

console.log(concated)

console.log(arr.sort())

console.log('')
console.log(concated)

console.log(concated.splice(1,2))
console.log(concated)

console.log(concated.splice(2,2))
console.log(concated)

console.log(concated.splice(2,3,222,333))
console.log(concated)

console.log('')
console.log(concated.reverse())


// loops arrays in JS

let array = [1,93,5,6,88]

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         array.forEach(element => {
            
//         });
//     }
// }

// for each loop    

// array.forEach(e => {
//     console.log(array[e])
//     e++; 
// });

// for in loop
let obj ={
    a: 1,
    b: 2,
    c:3
}
for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

// for off loop

for (const iterator of array) {
    console.log(iterator)
}

// map

