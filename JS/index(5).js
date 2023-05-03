/*
Write a program min() that takes any number of arguments and returns minimum number in the set of
arguments. Do not use the Math predefined objet
*/
function min(){
  var temp=arguments[0];
  for (var i=0;i<arguments.length;i++){
    if(temp>arguments[i]){
      temp=arguments[i]; 
    }
  }
  console.log(temp);
}
// let inputArray = [];
// let size = 5; //Maximum Array size

// for(var i=0; i<size; i++) {
	
// 	inputArray[i] = prompt('Enter Element ' + (i+1));
// }

// min(inputArray);
min(1,23,45,36);
