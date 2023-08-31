//- Create a function that takes an array, an index, and a value as parameters. Inside the function, 
//use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertArray(arr:number[],index:number,value:number){

arr.splice(index,0,value)
return arr;

}
const array=[1,2,3,4,5,6];
const modifyArray=insertArray(array,2,30)
console.log(modifyArray);

// - Write a program that uses a while loop to print the first 25 integers.
let intCount=0;
while(intCount<=25){
console.log(intCount);
intCount++;
}
// - Write a program that uses a while loop to print the first 10 even numbers.
let count=1;
let evencount=0;
while(evencount<10){
if(count %2==0){
    console.log(count);
    evencount++;
}

count++;
};

// - Create a function that takes a positive integer as parameter and uses
// a while loop to calculate and return the factorial of that number.
function factoralNumber(num1:number){
if(num1<0){
console.log("negative numbers are not allowed")
}
let count1:number=1;
let currentNumber:number=1;
while(currentNumber<=num1){
count1*=currentNumber;
currentNumber++;
}
return count1;
}
console.log(factoralNumber(5));

// - Write a program having an array of numbers
// if the number is negative it should remove the negative number from the array.
const negativeArray=[5,-2,3,-5,-8,9,-10]
function removeNegativeNumber(array:number[]){

   return array.filter(num=> num>=0) 
}
console.log(removeNegativeNumber(negativeArray))

// - Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.


function calculateSum(array:number[]) {

    let sum=0;
    let index=0;

    while(index< array.length){
        sum+=array[index];
        index++


    }

return sum

}
let numarr2=[1,2,3,3,2,100]
console.log(calculateSum(numarr2));
// - Implement a program that takes a list of temperatures in Celsius as input from the user. 
//Convert each temperature to Fahrenheit using the formula 
// F = (C * 9/5) + 32 and store the converted temperatures in an array. 
//Use a while loop to perform the conversion for each temperature.

let celciusArray=[0,1,12,13,15]
let fahrenheitArray=[];
function convertToFaren(celciuss:number){
return (celciuss *9/5 )+32

}
let index=0;

while(index<celciusArray.length){
    let celciuss=celciusArray[index];
    let fahrenheit=convertToFaren(celciuss)
    fahrenheitArray.push(fahrenheit);
    index++


}

console.log("CELCIUS ARRAY" ,celciusArray);
console.log("Converted Farenheit Array", fahrenheitArray)

