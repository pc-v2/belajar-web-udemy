function lifeInWeeks(age) {
    let days = 365;
    let weeks = 52;
    let months = 12;
    let remainingYears = 90 - age;
    let remainingMonths = remainingYears * months;
    let remainingDays = remainingYears * days;
    let remainingWeeks = remainingYears * weeks;
    console.log("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
}
lifeInWeeks(56);
//You have 12410 days, 1768 weeks, and 408 months left.