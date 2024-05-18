let arr = [1, 2, 4, 3, 5, 6, 7, 8, 10, 9, 20, 19, 18, 17, 16, 15, 11, 13, 12]
let n = arr.length


for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            let tem = arr[i]
            arr[i] = arr[j]
            arr[j] = tem
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i])
}