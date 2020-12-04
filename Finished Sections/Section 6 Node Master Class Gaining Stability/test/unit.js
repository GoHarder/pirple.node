/*
 * Unit Tests
 */

// Dependencies
var helpers = require('./../lib/helpers.js');
var logs = require('./../lib/logs.js');
var exampleDebuggingProblem = require('./../lib/exampleProblem.js');
var assert = require('assert');

// Holder for Tests
var unit = {};

// Assert that the getANumber  is returning a number
unit['helpers.getANumber should return a number'] = done => {
   var val = helpers.getANumber();
   assert.strictEqual(typeof val, 'number');
   done();
};

// Assert that the getANumber  is returning 1
unit['helpers.getANumber should return 1'] = done => {
   var val = helpers.getANumber();
   assert.strictEqual(val, 1);
   done();
};

// Assert that the getANumber  is returning 2
unit['helpers.getNumberOne should return 2'] = done => {
   var val = helpers.getANumber();
   assert.strictEqual(val, 2);
   done();
};

// Logs.list should callback an array and a false error
unit['logs.list should callback a false error and an array of log names'] = done => {
   logs.list(true, (err, logFileNames) => {
      assert.strictEqual(err, false);
      assert.ok(logFileNames instanceof Array);
      assert.ok(logFileNames.length > 1);
      done();
   });
};

// // Logs.truncate should not throw if the logId doesn't exist
// unit['logs.truncate should not throw if the logId does not exist, should callback an error instead'] = done => {
//    assert.doesNotThrow(() => {
//       logs.truncate('I do not exist', err => {
//          assert.ok(err);
//          done();
//       });
//    }, TypeError);
// };

// exampleDebuggingProblem.init should not throw (but it does)
// unit['exampleDebuggingProblem.init should not throw when called'] = done => {
//    assert.doesNotThrow(() => {
//       exampleDebuggingProblem.init();
//       done();
//    }, TypeError);
// };

// Export the tests to the runner
module.exports = unit;
