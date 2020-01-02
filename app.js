let money, time;

function start() {
    time = prompt("Enter the date using yyyy-mm-dd format:", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Enter monthly budget:", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalexpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Enter current month's required expenses:", ''),
            b = prompt("How much will it cost:", '');
        if (typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) { // returns exception when null.length
            console.log("Circle's stage " + i + ": success");
            appData.expenses[a] = b;
        } else {
            console.log("Circle's stage " + i + ": failure");
            i--;
        }
    }
}

function chooseOptExpenses () {
    for (let i = 1; i <= 3; i++) {
        let c = prompt("Enter current month's optional expenses:", '');

        if (typeof (c) != null  && c != '' && c.length < 50) { // returns exception when null.length
            console.log("2nd Circle's stage " + i + ": success");
            appData.optionalExpenses[i] = c;
        } else {
            console.log("2nd Circle's stage " + i + ": failure");
            i--;
        }
    }
}

chooseExpenses();
chooseOptExpenses();

function detectDailyBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Daily budget: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimal income level");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Average income level");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High income level");
    } else {
        console.log("Something went wrong");
    }
}

detectDailyBudget();
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let saved = +prompt("Enter the sum of the savings:", ''),
            percent = +prompt("What is the rate % :", '');
        appData.monthIncome = (saved / 100 / 12 * percent).toFixed();
        alert("Ur deposit's monthly income: " + appData.monthIncome);
    }
}

checkSavings();

