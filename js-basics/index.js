function sum() {
    let total = 0;
    for (value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4, 5));