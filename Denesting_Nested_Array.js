
function steamrollArray(arr) {
  var res=[];
  var flat = function(arr){
    if (Array.isArray(arr)){
      for (let v of arr){
        flat(v);
      }
    }
    else{
      res.push(arr);
    }
  }
  arr.forEach((ele)=>flat(ele))
  return res;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
