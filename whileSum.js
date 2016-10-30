/**
 * Created by ruxica on 30/10/16.
 */
function whileSum(n) {
  var sum = 0;
  while (n >= 1) {
    n--;
    if (n%3==0||n%5==0) {
      sum += n;
    }
  }
  return sum;
}
module.exports = whileSum;
