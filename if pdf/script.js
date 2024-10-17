//1
let age =27;
if(age > 18){
    console.log("you are an adult");
}
//2
let score =45;
if(score <= 50 ){
console.log("you failed the test");
}
//3
let na ="john";
if(na == "john"){
    console.log("hello, john");
}
//4
let day = "monday";
if(day !== "sunday" && day !== "saturday"){
console.log("its a weekday");
}
//5
let num = 4;
if(num % 2==0 ){ 
    console.log("the number is even");
}
//6
let char ="a" ;
if(char.match(/[a-zA-Z]/))
    {
console.log("its a letter");
}
//7
let list =[1,2,3];
if(Array.isArray(list)){
    console.log("its an array")
}
//8
let x = 5;
if(Math.sign(x)){
    console.log("5 is a positive number")
}
//9
let y = -5;
if(Math.sign(y)){
    console.log("-5 is a negative number")
}
//10
let z =9;
if(z % 3 == 0){
    console.log("z is a multple of 3")
}
//11
let gpa =3.5;
if(gpa >= 3.0 ){
    console.log("congratulation you have a good gpa")
}
//12
let password = "mypassword123";
if (password.length >= 8){
    console.log("your password is strong");
}
//13
let age1 =30;
if (age1>=18 || age1>=65){
    console.log("you are of working age");
}
//14
let color = "red";
if (color == "red" || color == "green" || color == "blue"){
    console.log("color is a primary color");
}
//15
let input = 11;
function isNumber(){
    if (!isNaN(input)){
        console.log(input , "is a valid number");
    }
}

