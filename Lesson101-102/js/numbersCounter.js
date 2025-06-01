const numbers = [5, 15, 3, 20, 8, 12];

function numbersCounter(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

numbersCounter(numbers);
