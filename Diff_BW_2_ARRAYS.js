function diffArray(arr1, arr2) {
  var newArr = [];
  arr2.forEach((e)=>{
    if (!arr1.includes(e)){
      newArr.push(e);
    }
  });
  arr1.forEach((e)=>{
    if(!arr2.includes(e)){
      newArr.push(e);
    }
  });
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
