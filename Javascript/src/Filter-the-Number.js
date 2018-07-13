var FilterString = function(value) {
    var numbers = [];
    for(var i=0;i<value.length;i++) {
        var char = value.charAt(i);
        if(!isNaN(char)) {
            numbers.push(parseInt(char));
        }
    }
    return parseInt(numbers.join(''));
};
