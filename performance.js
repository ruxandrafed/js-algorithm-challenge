/**
 * Created by ruxica on 30/10/16.
 */
var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;
var arrayPushAndIncrement = require( './arrayPushIncrement' );
var arrayPushAndReduce = require( './arrayPushReduce' );
var whileArrayReduce = require( './whileArrayReduce' );
var whileSum = require( './whileSum' );
var forSum = require( './forSum' );
var math = require( './math' );
// add tests
suite.add( 'arrayPushAndIncrement', function() {
  arrayPushAndIncrement(45678)
})
  .add( 'arrayPushAndReduce', function() {
    arrayPushAndReduce(45678)
  })
  .add( 'whileArrayReduce', function() {
    whileArrayReduce(45678)
  })
  .add( 'whileSum', function() {
    whileSum(45678)
  })
  .add( 'forSum', function() {
    forSum(45678)
  })
  .add( 'math', function() {
    math(45678)
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
