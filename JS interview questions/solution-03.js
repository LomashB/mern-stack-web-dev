// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = "hello"

function reverseMirror(str) {
    let revStr = str.split('').reverse().join('');

    let newStr = str + revStr

    return newStr
}

newStr = reverseMirror(str)


console.log(str)
console.log(newStr)