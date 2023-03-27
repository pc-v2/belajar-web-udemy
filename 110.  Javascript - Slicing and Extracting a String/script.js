// Slicing and Extracting Parts of a String
function sliceName (){
    let name = "Zuhdi";
    alert(name.slice(0,5)); 
/* from position 0 before position 5
Z u h d i
0 1 2 3 4 */
}
var tweet = prompt("Compose your tweet");
alert(tweet.slice(0,140))
// Challenge: Changing String Casing Solution
let name2 = prompt("What is your name?");
upperCaseChar = name2.slice(0,1).toUpperCase();
lowerCaseChar = name2.slice(1,name2.length).toLowerCase(); //slice(1) juga bisa 
console.log(name2.length);
alert("Hello, " + upperCaseChar + lowerCaseChar);
