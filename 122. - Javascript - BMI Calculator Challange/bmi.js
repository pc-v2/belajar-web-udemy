function bmiCalculator(weight, height) {
    return Math.round(weight/(height*height));
}
bmiCalculator(65,1.8); // 20

// cooler approuch which i didn't see in first place
function bmiCalculator(weight, height) {
    height = Math.pow(height, 2);
    return Math.round(weight/height);
}
bmiCalculator(65,1.8); // 20
