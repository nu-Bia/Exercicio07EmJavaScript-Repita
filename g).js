
function fatorial() {
    var result = num;
    do {
    if (num === 0 || num === 1) 
      return 1; 
    } while (num > 10) { 
      num--;
      result *= num;
    }
    return result;
  }
