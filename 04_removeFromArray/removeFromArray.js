const removeFromArray = function(array) {
    if (arguments.length === 0) {
        // nothing to remove 
        return array
    } else {
        let args = Array.from(arguments).slice(1);
        for (argument of args) {
            let argIndex = array.indexOf(argument);
            if (argIndex >= 0) {
                // there is a match in array
                array.splice(argIndex, 1);
            }
        }
        return array;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
