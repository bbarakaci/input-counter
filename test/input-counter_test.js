/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function() {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  // module('jQuery#awesome', {
  //   // This will run before each test in this module.
  //   setup: function() {
  //     this.elems = $('#qunit-fixture').children();
  //   }
  // });

  test('input counter', function() {
      var area = document.getElementById('area');
      var counter = document.getElementById('area-counter');
      var ic = new inputCounter.InputCounter(area, counter);
      var oninput = ic._oninputchange;
      
      area.focus();

      area.value = 'hello';
      
      oninput._check();
      
      stop();
      
      setTimeout(function () {
          equal(counter.innerHTML, 135, 'counts right');
          start();
      }, 200);
  });

}());
