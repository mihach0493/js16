// let number = 20;

// let array = [11, 9];

// let boolean = false

// if (number === 20) {
//     console.log('jest rowna 20');
// }
// else if (number === 11) {
//     console.log('jest rowna 11');
// }
// else {
//     console.log('Żaden z powyższych warunków NIE jest spełniony');
// }

function checkNumbers(num1, num2) {

    let result = false;

    if (num1 === 20) {
        result = true;

    }
    else if (num2 === 20) {
        result = true;
    }
    else if (num1 + num2 <= 20) {
        result = true;
    }

    return result;

}

console.log(checkNumbers(2, 6));
console.log(checkNumbers(15, 5));
console.log(checkNumbers(10, 8));
