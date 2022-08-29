//************************************** Arrays and Objects  **************************************************** */
//Ex#1

var array1={name:["AlQassem","Ahmmad"] ,
                age:[28,26], 
                famlyName:[" Oweiad"," Ramdan"]} ;

var info="Name : "+array1.name[0]+array1.famlyName[0]+", Age : "+array1.age[0] ;

console.log(info);
document.getElementById ("heding1").innerHTML = info;


//Ex#2

var array2={};
array2[0]=["AlQassem","Ahmmad"] ;
array2[1]=[" Oweiad"," Ramdan"] ;
array2[2]=[28,26];

var info2="Name : "+array2[0][1]+array2[1][1]+", Age : "+array2[2][1] ;
console.log(info2);
document.getElementById ("heding2").innerHTML = info2;
document.getElementById ("p1").innerHTML = array2[1].sort();

//Ex#3  changeing the value in the array

array2[0][1]="Khaled"
array2[2][1]=20;
var info2="Name : "+array2[0][1]+array2[1][1]+", Age : "+array2[2][1] ;
console.log(info2);
document.getElementById ("heding3").innerHTML = info2;

//Ex#4
var array3=[1,2,3,4,5,6,7,8,9]
document.getElementById ("heding4").innerHTML = array3.length;
document.getElementById ("heding5").innerHTML = array3.sort();
document.getElementById ("heding6").innerHTML = array3.length -1;

//************************************** Functions  **************************************************** */

const F1 = function (N1, N2) {return N1 + N2};
let sum=F1(2,3);
console.log("Sum= "+ sum);
document.getElementById ("SUM").innerHTML = "Sum= "+ sum;


function textEx(){
 let nameis="Ahmaed";
console.log("My Name is: "+nameis);
}

textEx()

function textEx2(user){
    let name2is="Hi My Name is ";
   console.log(name2is+user);
   }
   
   textEx2()


   function doubleTheNumber(Num1){return N1 *2};
function doubleTheNumber(Num1){
    let doubleN=(Num1*2);}
    console.log("the double is :"+doubleN);



//************************************** Datae  **************************************************** */



const datex = new Date();
console.log("Date is : "+ datex);

const datex2 = new Date();
console.log(datex2.toLocaleDateString("en-US"));



const timex= new Date();
console.log(timex.toLocaleTimeString("en-US"));





//**************************** ******************************************* */

const a = 5;
const b = 10;
var d=a+b;
console.log(d)

document.getElementById("SUM2").innerHTML = ('a' +  '+b =' + ( a + b) );
document.getElementById("SUM3").innerHTML = ('a' +  '/b =' + ( a / b) );
document.getElementById("SUM4").innerHTML = ('a' +  '-b =' + ( a - b) );