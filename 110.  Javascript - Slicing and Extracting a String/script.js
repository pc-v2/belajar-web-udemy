// Slicing and Extracting Parts of a String
function sliceName (){
    let name = "sapphired";
    alert(name.slice(0,8)); 
/* from position 0 before position 5
s a p p h i r e d
0 1 2 3 4 5 6 7 8 */
}
var tweet = prompt("Compose your tweet");
alert(tweet.slice(0,140))
// Challenge: Changing String Casing Solution
let name2 = prompt("What is your name?");
upperCaseChar = name2.slice(0,1).toUpperCase();
lowerCaseChar = name2.slice(1,name2.length).toLowerCase(); //slice(1) juga bisa 
console.log(name2.length);
alert("Hello, " + upperCaseChar + lowerCaseChar);
