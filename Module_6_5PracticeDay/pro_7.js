var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var copy_numbers = []
var n = numbers.length
for (let i = 0; i < n; i++) {
    let flg = false, x = copy_numbers.length

    for (let j = 0; j < x; j++) {
        if (copy_numbers[j] == numbers[i]) {
            flg = true
        }
    }
    if (flg == false) {
        copy_numbers.push(numbers[i])
    }
}

console.log(copy_numbers)
