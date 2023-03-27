/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    moveLeft();
    moveRight();
    moveLeft();
    moveRight();
 }
 
 function moveLeft(){
    putBeeper();
    move();
    turnLeft();
    move();
 }
 function moveRight(){
    putBeeper();
    move();
    turnRight();
    move();
 }