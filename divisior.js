const smallestDivisor = (n) =>{
  let del = 3;
  if(n<1){
    return NaN;
  }else{
  while(n%del!==0){
    del++;
  }}
  return del;
};
console.log(smallestDivisor(77));

