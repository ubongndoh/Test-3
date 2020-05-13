let Fizz = [ ];
let Buzz = [ ];
let FizzBuzz = [ ];
let Other  = [ ];

for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz[i] = console.log(i)
     } else if (i % 3 === 0) {
        Fizz[i] = console.log(i)
     } else if (i % 5 === 0) {
        Buzz[i] = console.log(i)
     } else {
        Other[i] = console.log(i)
    }
}

console.log("Total Number of Fizz = "      + Fizz.length);
console.log("Total Number of Buzz = "      + Buzz.length);
console.log("Total Number of FizzBuzz = "  + FizzBuzz.length);
console.log("Total Number of Other = "    + Other.length);

//Solutions

//Total Number of Fizz = 199
//Total Number of Buzz = 201
//Total Number of FizzBuzz = 196
//Total Number of Other = 200
