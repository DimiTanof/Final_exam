function calculateSum() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;
    var primeNumbers = [];
    var primeSum = 0;
    for (var i = a; i <= b; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
        primeSum += i;
      }
    }
    document.querySelector("#primeNumbers").innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeNumbers.join(", ");
    document.querySelector("#result").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeSum;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }