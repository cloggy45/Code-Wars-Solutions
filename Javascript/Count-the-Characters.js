function countChar(string, char) {
	var sum = 0;
	for(var i=0;i<string.length;i++) {
		if(char.toLowerCase() == string.charAt(i).toLowerCase()) {
			sum += 1;	
		}
	}
	return sum;
}

console.log(countChar("fizzbuzz","z"));

