console.log('Map filter reduce in arrays in js')

let arr = [1,12,5,7,32];

// let newarr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e)=>{
    return e**2
})

// let newarr = arr.map((value,array,index)=>{
//     return e**2
// })

console.log(arr)
console.log(newarr)

const greaterThenSeven = (e)=>{
    if(e>7){
        return true;
    }
    else{
        return false;
    }
}

console.log(arr.filter(greaterThenSeven))
console.log(newarr.filter(greaterThenSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a*b
}
const add = (a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))
console.log(arr2.reduce(add))

console.log(Array.from('hello'))