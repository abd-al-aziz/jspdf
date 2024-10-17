//1
let array =[1,2,3,4,5];
array.forEach((array)=>{
    console.log(array)
})
//2
let arr = [1, 2, 3, 4, 5];
let squared = arr.map(num => num * 2);

console.log(squared);
//3
let arr1= [1, 2, 3, 4, 5];
let evenarr1 = arr1.filter(function(arr1) {
    return arr1 % 2 === 0;
});
console.log(evenarr1);
//4
let arr2 = [1, 2, 3, 4, 5];
let sum=0
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log(sum);
//5
let fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits);
///6
let fruitss = ["banana", "apple", "orange"];
fruits.reverse();
console.log(fruits); 
///7
let arr3=[1,2,3]
let arr4 = [3,4,5]
console.log(arr3.concat(arr4));
///8
let arr5=[1,2,3,4,5,6]
console.log(arr5.slice(2,4));
///9
let arr6=[1,2,3,4,5,6]
console.log(arr6.splice(3));
///10
let arr7 = [1,2,3,4,5]
console.log(arr7.indexOf(3));
///11
let arr8 = [1,2,3,4,5]
console.log(arr8.join(" "));
//12
let string = "1, 2, 3, 4, 5";
let newArray = string.split(""); 
console.log(newArray); 
///13
let arr9 = [1,2,3,4,5]
console.log(arr9.length);
///14

//15

//16
let arr10 = [1,2,3];
if (Array.isArray(arr10)){
    console.log("true");
}
//17
let string1 = "hi";
var charArray = Array.from(string1);
console.log(charArray); 
//18
let arr11 = Array.of(1, 2, 3);
console.log(arr11); 
//19
let arr12 = [1, 2, 3, 4, 5];
arr12.fill(0, 0, 3);
console.log(arr12); 
//20
let arr13 = [1, 2, 3, 4, 5];
arr.copyWithin(0, 1, 3);
console.log(arr13); 



