//Ex#1

function tellFortune(NumOfChildren,partnerName,locationx,jobTitle)  {
    console.log("You will be a "+ jobTitle+ " in "+ locationx+ ", and married to "+ partnerName+ "with "+ NumOfChildren +" kids.")
   };
   tellFortune(4,"SomeOne","Amman","Civil Engineer");

//Ex#2
function calculateDogAge(puppyAge)  {
    return  xdog=Math.abs(puppyAge*7),
    console.log("Your doggie is " + xdog + " years old in dog years!")
   };
   calculateDogAge(-2);


//Ex#3
function calculateSupply(Age,amount_per_day)  {
    return  x=100, NN=(x-Age)*365*amount_per_day ,
    console.log("You will need "+ NN + " to last you until the ripe old age of " +x)
   };
   calculateSupply(30,3);



//Ex#4


function cube(a)  {
    
    return  c=a*a*a ,
    console.log("cube = " +c)
   };
   cube(3);


 //Ex#5

function multiply(N1,N2)  {
    
    return  multi=N1*N2, 
    console.log("The result is : " +multi)
   };
   multiply(3,4);


//Ex#6

function fullName(firstName,lastName)  {
    console.log(firstName+" "+lastName)
   };
   fullName("Adam","McCallen");

//Ex#7

function average(Number1,Number2,Number3,Number4,Number5)  {
return aver=(Number1+Number2+Number3+Number4+Number5)/5,
   console.log("The Average is : " +aver)
   };
   average(1,2,3,4,5);

//Ex#8

function randomNumber()  {
        console.log("Just a Random Number: " + Math.random()) };
       randomNumber()
    


       //Ex#9


function calculateDogAge(puppyAge)  {
    if (puppyAge>0){
    return alert("Your doggie is " + xdog + " years old in dog years!")}
    else{
      xdog=Math.abs(puppyAge*7),
      alert( "Age cont be negative !!!!! please enter a valid Age")}
  
   };
   calculateDogAge(2);
  