function fibonacciGenerator(n) {
    var sequence = [];
    if (n === 1) {
        sequence = [0];
    } else if (n === 2) {
        sequence = [0,1];
    } else {
        sequence = [0,1];
        for (i = 2 ; i < n; i++) {
            sequence.push(sequence[sequence.length-1]) + (sequence[sequence.length-2]);
        }  
    } return sequence;
}
