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
  if(depth === 0) {
		return;
  }
  for(k=0;k<=depth;k++) {
    numbers.push(Math.round(factorial(depth) / (factorial(k) * factorial(depth-k))));
  }
  return pascalsTriangle(depth-1);
}

var startTime = Date.now();

console.log(pascalsTriangle(1000));

var endTime = Date.now();
var elapsed = (endTime - startTime) / 1000;
console.log("Running time: " + elapsed );