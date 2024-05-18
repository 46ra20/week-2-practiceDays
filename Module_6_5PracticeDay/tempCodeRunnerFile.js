console.log(typeof (x))

if (typeof (arr) != 'object' || typeof (x) != 'number') {
    console.log('Invalid Input')
}
else {
    let result = monthlySavings(arr, x)
    console.log(result)
}