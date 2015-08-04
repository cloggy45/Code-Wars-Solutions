function scrabbleScore(str){

    var score = 0;
    var string = str.split('');

    string.forEach(function(el) {
        el == ' ' ? score += 0 : score += $dict[el.toUpperCase()];
    });

    return score;
}