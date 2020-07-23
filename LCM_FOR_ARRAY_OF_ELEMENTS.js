function hcf(a,b){
  for(let i=a-b;i>=2;i--){
    if (a%i==0 && b%i==0){
      return(i)
    }
  }
  return(1)
}
function lcm(a,b){
  let h = hcf(a,b);
  return((a*b)/h); 
}
function smallestCommons(arr) {
 let temp_arr =[1];
 arr.sort((a,b)=>(a-b));
 for (let a=arr[0];a<=arr[1];a++){
   temp_arr.push(a);
   var LCM = lcm(temp_arr[0],temp_arr[1]);
   temp_arr=[];
   temp_arr.push(LCM)
   
 }
 return(LCM)
}
console.log(smallestCommons([2,13]));
