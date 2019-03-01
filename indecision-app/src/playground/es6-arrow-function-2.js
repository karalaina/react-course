const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((n) => this.multiplyBy * n);
    }
}

console.log(multiplier.multiply());