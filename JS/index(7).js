/*
Create a web page to calculate the Compound Interest using the formula given below:
Where:
p = Principal,
r = Rate of Interest,
n = period in years
The values used in the example in the following figure are as follows:
P = 1000, n = 1, r = 10
(p*(1+ n/100)^n)-p
*/
function compound_interset(p,r,n){
  let result = (p* Math.pow((1+n/100),n)-p);
  console.log("compound interest on amount: "+ p +" for "+n+" year at "+ r +"% rate if interest is: ")
  console.log(result)
  console.log("total amout is: "+(result+p))
}

compound_interset(1000,1,1)