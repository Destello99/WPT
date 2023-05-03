/*
Write a function to list all even numbers less than or equal to the number n. Take the value of n as input
from user. Use while loop
*/
let  number = parseInt(prompt("Enter a number to print even number up to this number"))
let even = 2;
while(even <=number){
  if(even%2 ==0)
    console.log(even)
  even++;
}