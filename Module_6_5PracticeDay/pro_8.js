var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let mx = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (mx < numbers[i]) {
        mx = numbers[i]
    }
}

console.log(mx)