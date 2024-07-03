function fibonacci (n) {
    if (n < 1) {
        return undefined;
    }

    let first = 0;
    let second = 1; 
    if (n == 1) {
        return first; 
    }

    let index = 2;
    while (index < n) {
        let sum = first + second;
        first = second; 
        second = sum; 
        index++;
    }
    
    return second;
}

// print the first 10 values
for (let n = 1; n <= 10; n++) {
    console.log(fibonacci(n));
}