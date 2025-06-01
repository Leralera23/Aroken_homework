function calculator(num1, num2, operation) {
    if (operation === 'addition') {
        return num1 + num2;
    } else if (operation === 'subtraction') {
        return num1 - num2;
    } else if (operation === 'multiplication') {
        return num1 * num2;
    } else if (operation === 'division') {
        return num1 / num2;
    } else {
        return 'Неверная операция';
    }
}

const result = calculator(4, 5, 'multiplication');
console.log(result); 
