var numbers = Array();

function generate_number_list(start,end) {
  for(var i=start;i<=end;i++) {
    console.log(i);
    numbers[i] = true;
  }
}

function isDivisible(number) {
  var primes = [2,3,5,7];
  for(var i=0;i<primes.length;i++) {
    if(number % primes[i] == 0) {
      return false
    } else {
      return true
    }
  }
}




console.log(isDivisible(20));