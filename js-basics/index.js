try {
    const numbers = [1, 2, 3, 4, 1];
    console.log(countOccurences(null, -1));
} catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Invalid array");

    return array.reduce((accumulator, currentValue) => {
        return (currentValue === searchElement) ? accumulator + 1 : accumulator;
    }, 0);
}