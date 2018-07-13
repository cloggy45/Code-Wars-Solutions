//http://www.codewars.com/kata/558fa34727c2d274c10000ae

function scrabbleScore(str){

    var score = 0;
    var string = str.split('');

    string.forEach(function(el) {
        el == ' ' ? score += 0 : score += $dict[el.toUpperCase()];
    });

    return score;
}