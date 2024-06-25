console.log("Exercise - Faulty Calculator");

// create a faulty calculator 
/*
1. it takes two number as a input
2. it performs wrong operation as follows
+ ---> -
* ---> +
- ---> /
/ ---> **

it performs wrong operation 10% of the times
*/

function calc(a,b,operator){
    var r = (Math.random()*100);
    console.log(r);

    if(r<10){
        if(operator == '+'){
            console.log(a-b);
        }
        else if(operator == '*'){
            console.log(a+b);
        }
        else if(operator == '-'){
            console.log(a/b);
        }
        else if(operator == '/'){
            console.log(a**b);
        }
        else{
            console.log('invalid operator');
        }
    }
    else{
        if(operator == '+'){
            console.log(a+b);
        }
        else if(operator == '*'){
            console.log(a*b);
        }
        else if(operator == '-'){
            console.log(a-b);
        }
        else if(operator == '/'){
            console.log(a/b);
        }
        else{
            console.log('invalid operator');
        }
    }
}

calc(10,11,'+')


