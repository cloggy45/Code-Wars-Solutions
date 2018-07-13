function factorial(n) {
	if(n === 0) {
		return 1;
	}
	return n * factorial(n-1);
}

function nChooseK(n, k) {
	return factorial(n) / (factorial(k) * factorial(n-k));
}

var numbers = [];		

function pascalsTriangle(depth) {

	for(n=0;n<depth;n++)
	{
		for(k=0;k<=n;k++) {
			numbers.push(Math.round(nChooseK(n,k)));
		}
	}
	return;
}

var startTime = Date.now();

console.log(pascalsTriangle(1000));

var endTime = Date.now();
var elasped = (endTime - startTime) / 1000;
console.log("Execution time: " + elasped);

