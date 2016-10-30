/**
 * Created by ruxica on 30/10/16.
 */
var should = require( 'chai' ).should();
var arrayPushAndIncrement = require( './arrayPushIncrement' );
describe('arrayPushAndIncrement', function() {
  it('should return 23 when passed 10', function() {
    arrayPushAndIncrement(10).should.equal(23);
  })
  it('should return 78 when passed 20', function() {
    arrayPushAndIncrement(20).should.equal(78);
  })
  it('should return 2318 when passed 100', function() {
    arrayPushAndIncrement(100).should.equal(2318);
  })
  it('should return 23331668 when passed 10000', function() {
    arrayPushAndIncrement(10000).should.equal(23331668);
  })
  it('should return 486804150 when passed 45678', function() {
    arrayPushAndIncrement(45678).should.equal(486804150);
  })
});

var arrayPushAndReduce = require( './arrayPushReduce' );
describe('arrayPushAndReduce', function() {
  it('should return 23 when passed 10', function() {
    arrayPushAndReduce(10).should.equal(23);
  })
  it('should return 78 when passed 20', function() {
    arrayPushAndReduce(20).should.equal(78);
  })
  it('should return 2318 when passed 100', function() {
    arrayPushAndReduce(100).should.equal(2318);
  })
  it('should return 23331668 when passed 10000', function() {
    arrayPushAndReduce(10000).should.equal(23331668);
  })
  it('should return 486804150 when passed 45678', function() {
    arrayPushAndReduce(45678).should.equal(486804150);
  })
});