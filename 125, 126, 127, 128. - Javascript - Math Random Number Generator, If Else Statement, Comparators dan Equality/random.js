// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

let FirstPerson = prompt("Siapa nama mu?");
let SecondPerson = prompt("Siapa nama doi?");
let MatchScore = Math.random() * 100;
MatchScore = Math.floor(MatchScore) + 1;
if (MatchScore > 90) {
    alert("Angka Kecocokan mu dengan doi " + MatchScore + "% Dia itu Soulmate mu");
} else if (MatchScore > 30 && MatchScore <= 90)  {
    alert("Angka Kecocokan mu dengan doi " + MatchScore + "%");
} else {
    alert("Angka Kecocokan mu dengan doi " + MatchScore + "% dia dan kamu bagaikan air dan minyak");
}