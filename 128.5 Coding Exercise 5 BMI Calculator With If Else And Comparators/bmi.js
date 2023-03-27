function bmiCalculator (weight, height) {
    height = Math.pow(height, 2);
    var bmi = weight / height;
    bmi = Math.floor(bmi);
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
}