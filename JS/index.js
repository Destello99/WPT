//Write a program to accept three positive numbers and output the largest of them.
let first_number = parseInt(prompt("Enter a number"));
let second_number = parseInt(prompt("Enter a number"));
let third_number = parseInt(prompt("Enter a number"));
if(first_number > second_number && first_number > third_number)
  console.log(first_number + " first is greater");
else if (second_number > third_number)
  console.log(second_number + " second is greater");
else
  console.log(third_number+" third is greater");