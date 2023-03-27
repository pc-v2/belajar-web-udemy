var numberOfBottles = 99;
while(numberOfBottles >= 0){
var bottleWord = "bottle";
if (numberOfBottles === 1) {
        bottleWord = "bottles";        
} 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer. Take one down, pass it around " + numberOfBottles + " " + bottleWord + " of beer on the wall");
     numberOfBottles--;
}
