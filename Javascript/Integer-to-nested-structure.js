// We shall encode an integer in the following way:
// Given positive integer n > 1. We convert it to an array as follows:
// If it is equal to 2 return an empty array
// Otherwise create array of all n's prime factors sorted ascending, then each element replace with its index in prime numbers sequence and finally convert each element to array
// https://www.codewars.com/kata/integer-to-nested-structure

var prime_factors = [];

function getPrimeFactors(n) {
  console.log("Get Prime Factors of " + n );
  while(n % 2 === 0) {
    prime_factors.push(2);
    n = n / 2
  }
  for(var i=3;i<= Math.sqrt(n);i=i+2) {
    while(n % i === 0) {
      prime_factors.push(i);
      n = n/i;
    }
  }

  if(n > 1) prime_factors.push(n);
  
  return prime_factors;
}

