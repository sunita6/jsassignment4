let n = Number(prompt('Enter number: '));

console.log(`The prime numbers between 2 and ${n} are:`);
for (let i = 2; i <=n; i++) {
    let flag = 0;
// looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}