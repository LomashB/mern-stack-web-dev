// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

array = [12,21,3,5,6,8,12,3,3,12]

function double(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i-1])
        {
            
        }
        else{
            array.push(arr[i])
            array.push(arr[i])
            
        }

    }
    return array

}

newarr = double(array)
console.log(array)
console.log(newarr)