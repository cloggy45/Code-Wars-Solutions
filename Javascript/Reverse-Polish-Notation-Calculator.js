(function() {

    /*
     http://www.codewars.com/kata/52f78966747862fc9a0009ae
     */

    function calc(expression) {

        var expContainer = expression.split(" ");
        var exitLoop, operatorExists = false;

        if(expression.length === 0) { return 0 }

        var operations = {
            '+': function (a, b) { return a + b },
            '-': function (a, b) { return a - b },
            '*': function (a, b) { return a * b },
            '/': function (a, b) { return a / b }
        }

        for (var count = 0; expContainer.length !== 1; count++) {
            exitLoop = false;
            for (var outIndex = 0; outIndex < expContainer.length && !exitLoop; outIndex++) {
                for(var property in operations) {
                    if (expContainer[outIndex] === property) {
                        var sum = operations[expContainer[outIndex]](parseInt(expContainer[outIndex - 2]), parseInt(expContainer[outIndex - 1]));
                        expContainer.splice(outIndex - 2, 3, sum);
                        operatorExists = exitLoop = true;
                    }
                }
            }

            if (!operatorExists) {
                return ((/[\.]/.test(expContainer)) ? parseFloat(expContainer[expContainer.length - 1]) : parseInt(expContainer[expContainer.length - 1]));
            }
        }
        return parseInt(expContainer[0]);
    }
})()