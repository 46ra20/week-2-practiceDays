function monthlySavings(arr = [], number = 0) {
    let total = 0, n = arr.length
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 3000) {
            total += (arr[i] - (arr[i] * (20 / 100)))
        }
        else { total += arr[i] }
    }
    if (total > number) {
        return total - number
    }
    else {
        return 'earn money'
    }

}

let x = [900, 2700, 3400]
let arr = 10000


// console.log(typeof (x))

if (typeof (arr) != 'object' || typeof (x) != 'number') {
    console.log('Invalid Input')
}
else {
    let result = monthlySavings(arr, x)
    console.log(result)
}

// console.log(3000 * (20 / 100))