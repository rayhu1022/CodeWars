// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length > 0) {
        return array.reduce((accum, number) => accum + number, 0) / array.length;
    }
    return 0
}