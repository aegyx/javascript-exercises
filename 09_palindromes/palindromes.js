const palindromes = function (string) {
    if (string.length === 0 || string.length === 1) return true;

    string = string.toLowerCase().replace(/\W/g, '');

    let halfway = ''
    let firstHalf = ''

    if (string.length % 2 === 0) {
        halfway = string.length/2; 
        firstHalf = string.slice(0, halfway);
    } else {
        halfway = Math.floor(string.length/2)+1;
        firstHalf = string.slice(0, halfway-1);
    };
    
    let secondHalf = string.slice(halfway);
    let secondHalfReversed = Array.from(secondHalf).reduce((accumulator, currentValue) => {
        return currentValue + accumulator;
    });

    return firstHalf === secondHalfReversed;
};

// Do not edit below this line
module.exports = palindromes;
