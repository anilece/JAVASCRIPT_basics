// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
return(title.split(" ")
.filter((i)=>(i!==""))
.join("-")
.toLowerCase());
}
// Only change code above this line
The globalTitle variable should not change.
Passed
Your code should not use the replace method for this challenge.
Passed
urlSlug("Winter Is Coming") should return "winter-is-coming".
Passed
urlSlug(" Winter Is  Coming") should return "winter-is-coming".
Passed
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
Passed
urlSlug("Hold The Door") should return "hold-the-door".
