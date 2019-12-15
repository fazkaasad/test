let money = +prompt("Enter monthly budget:", ''),
    time = prompt("Enter the date using yyyy-mm-dd format:", '');

let appData = {
    budget: money,
    expenses: {},
    optionalexpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let questionsFlag = false;

while (!questionsFlag) {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Enter current month's required expenses:", ''),
            b = prompt("How much will it cost:", '');
        if (typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("Circle's stage " + i + ": success");
            appData.expenses[a] = b;
            questionsFlag = true;
        } else {
            console.log("Circle's stage " + i + ": failure");
            questionsFlag = false;
            appData.expenses = {};
            break;
        }
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimal income level");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average income level");
} else if (appData.moneyPerDay > 2000) {
    console.log("High income level");
} else {
    console.log("Something went wrong");
}