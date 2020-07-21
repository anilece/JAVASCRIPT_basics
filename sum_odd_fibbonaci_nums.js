function sumFibs(num) {
  var fib=[1,1]
  var sum =2;
  for (let i=2;i<=num;i++){
    fib.push(fib[i-1]+fib[i-2])
      if (fib[i]>num){
      break;
    }
    if (fib[i]%2==1){
      sum+=fib[i];
    }
  } 
  console.log(sum);
  return sum;
}

sumFibs(10);
