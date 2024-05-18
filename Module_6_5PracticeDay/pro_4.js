let x = 2028

if (x % 4 == 0 && x % 100 != 0 || x % 400 == 0) {

    console.log('Leap Year!!!')
}
else {
    console.log('This is Not leap year')
}