const assert = require('assert');
const sinon = require('sinon');

let { TimeFormatter } = require('../src/TimeFormatter/TimeFormatter');


describe('formatDuration', () => {
  
  let testTimeFormatter;

  before(() => {
    const timeframesInSeconds = new Map([
      ["year", 2073600],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
    ]);

    let timeframesSelected = new Map([
      ["year", 0],
      ["day", 0],
      ["hour", 0],
      ["minute", 0],
      ["second", 0]
    ]);

    testTimeFormatter = new TimeFormatter();
  })

  describe('divideSecondsIntoTimeframes function tests', () => {

    const expectedResult = new Map([
      ["years", 0],
      ["days", 0],
      ["hours", 0],
      ["minutes", 1],
      ["seconds", 2]
    ])

    it('should set seconds to 2', () => {
      let spy = sinon.spy(testTimeFormatter,"divideSecondsIntoTimeframes");
      testTimeFormatter.divideSecondsIntoTimeframes(62);
      const state = spy.thisValues[0];
      const timeframesSelected = state.timeframesSelected;
      
      assert.deepEqual(timeframesSelected, expectedResult);
    })
  })


})

