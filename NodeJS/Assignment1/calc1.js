/*
Create a user defined local module calc.js that exposes the following functions: add(a,b), 
subtract(a,b), multiply(a,b), divide(a,b), square(a), sum(a,b,c...) 
Create a client application that invokes each of these methods
*/
exports.add=function(a,b){
    return a+b;
}

exports.sub=function(a,b){
    return a-b;
}
exports.mul=function(a,b){
    return a*b;
}

exports.div=function(a,b){
    return a/b;
}
exports.square=function(a){
    return a*a;
}
exports.sum=function(a){
    var s=0;
    for( var i=0;i<a.length;i++)
   {
    s=s+a[i];
   }
   return s
}