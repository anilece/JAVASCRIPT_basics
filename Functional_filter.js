// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  this.forEach((s)=>
  {if (callback(s))
  newArray.push(s);
  });
  console.log(newArray)
  return newArray;


};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
==================================================================================
  const squareList = (arr) => {
  // Only change code below this line
  var res=[]
  let filtr = arr.filter((i)=>{
    if (i>0 && Math.round(i)===i){
      res.push(i*i);
    }
  })
  return res;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
