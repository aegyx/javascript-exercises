const fibonacci = function(fib_num) {
    if (fib_num < 0) {
        return 'OOPS';
    }
    let fibDict = {0: 0, 1: 1};
    for (i=2; i<=fib_num; i++) {
        let keys = Object.keys(fibDict);
        let lastElem = fibDict[keys[keys.length-1]];
        let secondLastElem = fibDict[keys[keys.length-2]];
        fibDict[i] = lastElem + secondLastElem;
    }
    return fibDict[fib_num];
};

// Do not edit below this line
module.exports = fibonacci;
