/**
 * Created by ruxica on 30/10/16.
 */
function whileLoopArrayReduce(n) {
  var array = [];
  while (n >= 1) {
    n--;
    if (n%3==0||n%5==0) {
      array.push(n);
    }
  }
  return array.reduce(function(prev, current) {
    return prev + current;
  });
}
module.exports = whileLoopArrayReduce;