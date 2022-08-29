
//Ex1 :  FOR

let text = "";

for (let i = 1; i < 8; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;


//Ex2 :  FOR
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0,
  len = cars.length,
  text2;
for (text2 = ""; i < len; i++) {
  text2 += cars[i] + "<br>";
}
document.getElementById("demo2").innerHTML = text2;


//Ex3 :  While
//The major difference between for loop and while loop is that for loop is used when the number of iterations is known whereas,
// in the while loop, execution is done until the statement in the program is proved wrong.

let text3 = "";
let i2 = 0;
while (i2 < 10) {
  text3 += "<br>The number is " + i2;
  i2++;
}
document.getElementById("demo3").innerHTML = text3;


//Ex4 : do While

let text4 = ""
let i3 = 10;

do {
  text4 += "<br>The number is " + i3;
  i3++;
}
while (i3 < 10);  

document.getElementById("demo4").innerHTML = text4;



//************************************************************************8 */
let array1 = ["code", "source", {name: "website"}];
let popped = array1.pop()
console.log(array1, popped);





let arr = [2, "code"];
let newArrLength = arr.push({name: "website"});
console.log(arr, newArrLength);





let arr = ["code", {name: "website"}, 56];
let shiftedValue = arr.shift();
console.log(arr, shiftedValue);




let arr = [{name: "website"}];
let newArrLength = arr.unshift([2, "code"]);
console.log(arr, newArrLength);