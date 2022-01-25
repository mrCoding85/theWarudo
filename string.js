var test = (a, b = 3, c = 42) => {
    return a + b + c;
}
console.log(test(5)); //50