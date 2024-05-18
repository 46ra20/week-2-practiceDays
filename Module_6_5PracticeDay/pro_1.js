let x = 40;

if (x >= 0 && x < 33) {
    console.log("Sorry, F")
}
else if (x >= 33 && x < 40) {
    console.log("D")
}
else if (x >= 40 && x < 50) {
    console.log("C")
}
else if (x >= 50 && x < 60) {
    console.log("B")
}
else if (x >= 60 && x < 70) {
    console.log("A-")
}
else if (x >= 70 && x < 80) {
    console.log('A')
}
else if (x >= 80 && x <= 100) {
    console.log("A+")
}
else {
    console.log('Invalid Number...!!!')
}



//     A+: 80.00–100.00
// A: 70.00–79.99
// A-: 60.00–69.99
// B: 50.00–59.99
// C: 40.00–49.99
// D: 33.00–39.99
// F: 0.00–32.99