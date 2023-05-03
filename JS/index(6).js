// Write a function pow(x,y) that calculates xyDo not use the Math predefined objet
function pow( x, y){
  var result =1;
  for(let i=1; i<=y; i++){
    result = result*x;
  }
  console.log(result)
}
pow(3,5)