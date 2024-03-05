function currencyConverter(money) {
  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;
  let dollars = 0;

  function coinConverter(pennies,nickels,dimes,quarters,dollars,money) {
    if(money > 100) {
      money -= 100;
      dollars ++;
      return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
    } else if(money >= 25) {
      money -= 25;
      quarters ++;
      return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
    } else if(money >= 10) {
      money -= 10;
      dimes ++;
      return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
    } else if(money >= 5) {
      money -= 5;
      nickels ++;
      return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
    } else if(money >= 1) {
      money --;
      pennies++;
      return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
    } else {
      return ([pennies,nickels,dimes,quarters,dollars]);
    }
  }
  return coinConverter(pennies,nickels,dimes,quarters,dollars,money);
}

console.log(currencyConverter(499));