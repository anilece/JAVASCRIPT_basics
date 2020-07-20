// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (arr,bookName) {
  let arr1=[...arr];
  arr1.push(bookName);
  return arr1;
  
  // Change code above this line
}

// Change code below this line
function remove (arr,bookName) {
  let arr2=[...arr];
  var book_index = arr2.indexOf(bookName);
  if (book_index >= 0) {

    arr2.splice(book_index, 1);
    return arr2;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
