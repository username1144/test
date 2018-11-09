½const smallestDivisor = (num) =>{
  if(num<0){ // 0 != num
return 0;
  }else if(num === 1){ // 1/1 = 1
  return 1;
  }else{ // start
return a(2,num);
  }
};
const a = (n,de)=>{
if (de%n===0){
return n;
}else{
return a(n+1,de);
}
};
console.log(smallestDivisor(121));

