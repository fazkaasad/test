let arr = [31,44,2],
    i = arr.sort(compareNumbers);

function compareNumbers(a, b) {
    return a - b;
}

console.log(i);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);