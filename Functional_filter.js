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
