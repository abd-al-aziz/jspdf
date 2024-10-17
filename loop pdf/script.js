//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  //2
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
///3
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
///4
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  ///5
  let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log( sum);
///6
let arr = [1, 2, 3, 4, 5];
let largest = arr[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log( largest);
///7
let arr1 = [5, 4, 3, 2, 1];
let smallest = arr[0]; // initialize smallest with the first element

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < smallest) {
    smallest = arr1[i];
  }
}

console.log(smallest);
///11
let arr3 = [1, 2, 3, 4, 5];
let sum1 = 0;
let average = 0;

for (let i = 0; i < arr.length; i++) {
  sum1 += arr3[i];
}

average = sum1 / arr3.length;

console.log(average);
  
////12
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  //13

  //14
  //15
  let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}
//16
let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j]);
  }
}
//17


//18

//19

//20

//21
