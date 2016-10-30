/**
 * Created by ruxica on 30/10/16.
 */
function forSum(n) {
  n = n-1;
  var sum = 0;
  for (n; n >= 1 ;n--) {
    (n%3==0||n%5==0) ? sum += n : null;
  }
  return sum;
}

module.exports = forSum;