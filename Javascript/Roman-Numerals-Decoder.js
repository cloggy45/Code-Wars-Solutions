(function() {

    /*
     http://www.codewars.com/kata/roman-numerals-decoder
     */

    function solution(inputString) {

        var romanNumerals = { 'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 };
        var sum = 0, temp = 0;

        for(var i=0; i < inputString.length; i++) {
            if(romanNumerals[inputString.charAt(i)] < romanNumerals[inputString.charAt(i + 1)]) {
                temp = romanNumerals[inputString.charAt(i)];
            }
            sum += romanNumerals[inputString.charAt(i)] - temp;
        }
        return sum;
    }
})();