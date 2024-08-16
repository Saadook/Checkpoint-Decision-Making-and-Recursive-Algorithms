
  function IsLeapYear(year){
    if (year %4 == 0 && year %100 !=0) or(year % 400==0);{

        return true
    } else {
        return false
    }
  }
  function fibonacci(n){
  if(n<=1){
  return n
} else  {
  return fibonacci(n-1) + fibonacci(n-2)
}
  }

  function power(base, exponent){
  if (exponent == 0){
  return 1
  }
   exponent < 0
  return 1 / power(base, -exponent)
  else {
  return base * power(base, exponent - 1)
  }
}








