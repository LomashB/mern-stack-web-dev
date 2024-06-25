// create a business name generator by combining and list of adjectives and shop name and another words

// adjectives: Crazy Amazing Fire
// shop name: Engine Foods Garments
// Another word: Bros Limited Hub

// let first,second,third;

// // first
// let rand1 = Math.random()

// if(rand1<0.33){
//     first = "Crazy";
// }
// else if(rand1<0.66 && rand1>=0.33){
//     first = "Amazing";
// }
// else{
//     first = "Fire";
// }

// // second
// let rand2 = Math.random()

// if(rand2<0.33){
//     second = "Engine";
// }
// else if(rand2<0.66 && rand2>=0.33){
//     second = "Foods";
// }
// else{
//     second = "Garments";
// }
// // third
// let rand3 = Math.random()

// if(rand3<0.33){
//     third = "Bros";
// }
// else if(rand3<0.66 && rand3>=0.33){
//     third = "Limited";
// }
// else{
//     third = "Hub";
// }

// console.log(first + " " + second + " " + third)

let obj1 ={
    1:"crazy",
    2:"amazing",
    3:"fire"
}
let obj2 ={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let obj3 ={
    1:"Bros",
    2:"limited",
    3:"hub"
}

rand1 = Math.ceil(Math.random() * 3)
rand2 = Math.ceil(Math.random() * 3)
rand3 = Math.ceil(Math.random() * 3)

console.log(obj1[rand1] +" "+ obj2[rand2] + " " + obj3[rand3] )