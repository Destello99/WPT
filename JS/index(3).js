/*
Write a function that accepts two numbers and a operator like (+,-,*, /) from user and performs the
appropriate operation indicated by the operator.
*/
let  num1 = parseInt(prompt("Enter first number"))
let  num2 = parseInt(prompt("Enter second number"))
do{
  console.log("1. + \n2.- \n3.* \n4./ \n0.exit")
  let choice = parseInt(prompt("Choose which operation you want to perform:"));
  var flag=parseInt(0);
  switch(choice){
    case 1:
      console.log("Addition is : "+ (num1+num2));
      break;
    case 2: 
      console.log("Difference is : "+ (num1-num2));
      break;
    case 3:
      console.log("Multiplication is : "+ (num1*num2));
      break;
    case 4:
      if(num2 == 0)
         console.log("Can't divide by ZERO")
      else
         console.log("Division is : "+ (num1/num2));
      break;
    case 0:
      ++flag;
      console.log("Bye");
      break;
    default: console.log("Enter valid choice :(")
      break;
  }
}while(flag !=1)
