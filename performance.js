/**
 * Created by ruxica on 30/10/16.
 */
var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;
var arrayPushAndIncrement = require( './arrayPushIncrement' );
var arrayPushAndReduce = require( './arrayPushReduce' );
// add tests
suite.add( 'arrayPushAndIncrement', function() {
  arrayPushAndIncrement(45678)
})
  .add( 'arrayPushAndReduce', function() {
    arrayPushAndReduce(45678)
  })
  // add listeners
  .on( 'cycle', function( event ) {
    console.log( String( event.target ));
  })
  .on( 'complete', function() {
    console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ));
  })
  // run async
  .run({ 'async': true });
