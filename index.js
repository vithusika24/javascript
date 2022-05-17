// function clickhere() {
//     console.log("buttonclicked")
// }
// clickhere();

// //named function
// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 6));

// //anonimus function
// var multi = function (k, v) {
//     console.log(k * v);
// }

// multi(20, 24);


// // for loop
// // for ( i = 1; i<=10; i++) {
// //     if (i % 2 === 1) {
// //         console.log(i);
// //     }
// // }


// //while loop
// // let a = 0;

// // while (a < 5) {
// //     console.log(a);
// //     a++;
// // }


// //do while loop
// // let b = 1;

// // do {
// //     console.log(b);
// //     b++;
// // } while ( b > 20)



// // let age = 3;
// // let pizzashop = age > 18 ? "big pizza" : "small pizza";
// // console.log(pizzashop);


// //if else
// let marks = 77;

// if (marks > 75) {
//     console.log("very good");
// }
// else if (marks > 65) {
//     console.log("good");
// }
// else {
//     console.log("try it next time")
// };

// //switch

// let month = 2;

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("three months");
//         break;

//     case 4:
//     case 5:
//         console.log("two months");
//         break;

//     case 6:
//         console.log("one month");
//         break;

//     default:
//         console.log("not a month")
// }


// //array

// let color = ["black", "blue", "white",];

// color[6] = "red";

// color.push("orange");
// color.pop();

// console.log(color);

// document.write("this is a javascript");


// let sum = 0;
// let a = [1, 2, 3];
// a.forEach(getsum);
// function getsum(ele) {
// sum += ele ; }
// console.log(sum);

// wether = "spring";

// if (wether == "spring") {
//     console.log("it is nice");
// } else {
//     console.log("no wether");
// }

let animal = [ "dog", "cat", "hen"];

animal[40] = "lion";

console.log(animal.length);


let weather = "spring";
let clothingChoice = "";
 
if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);