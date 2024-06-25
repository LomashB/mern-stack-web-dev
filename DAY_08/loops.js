console.log("Loops Tutorial");

let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

for (let i = 0; i < 100; i++) {
  console.log(a + i);
}

let obj = {
  name: "lomash",
  role: "programmer",
  comapny: "google",
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}

for (const iterator of "Lomash") {
    console.log(iterator)
}

let z=2;
while(z<7){
    console.log(z);
    z++;
}

let s=10;
do {
    console.log(s);
    s++;
} while (s<6);