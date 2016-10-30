/**
 * Created by ruxica on 30/10/16.
 */
function arrayPushAndReduce(n) {
  var array = [];
  for (var i = 1; i < n; i ++) {
    if (i % 3 == 0 || i % 5 == 0) {
      array.push(i);
    }
  }
  return array.reduce(function(prev, current) {
    return prev + current;
  });
}
module.exports = arrayPushAndReduce;