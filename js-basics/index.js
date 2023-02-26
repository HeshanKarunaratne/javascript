showNumbers(50);
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const type = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, type);
    }
}