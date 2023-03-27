var message = prompt("Compose your tweet: ");

function messages () {
    try {
        if (message.length < 1) {
        alert("Please input a character");
        }
        else if (message.length < 2) {
            alert("You have written " + message.length 
                + " character, you have " + (140 - message.length) + " remaining.");
        } else { 
                alert("You have written " + message.length 
                    + " characters, you have " + (140 - message.length) + " remaining.");
            }
        }
    catch (error) { 
        alert("Please input a character");
        console.log("Null character");
    }
}
messages()