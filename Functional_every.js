function checkPositive(arr) {
  // Only change code below this line

  return arr.every((i)=> (i>0));
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
