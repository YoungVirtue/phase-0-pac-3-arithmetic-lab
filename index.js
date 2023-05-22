function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function increment(a) {
    return ++a;
}

function decrement(a) {
    return --a;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n , 10);
}

add(2, 2);
subtract(2, 2);
multiply(2, 2);
divide(2, 2);
increment(1);
decrement(1);
makeInt("2032");
preserveDecimal("2.2222");