const assert = require('assert');
let { TimeFormatter } = require('../src/TimeFormatter.js');


describe('formatDuration', () => {
  let TestTimeFormatter;
  before(() => {
    TestTimeFormatter = new TimeFormatter();
  })
  it('should pass these tests', () => {
    assert.equal(TestTimeFormatter.formatDuration(0), "now");
    assert.equal(TestTimeFormatter.formatDuration(62), "1 minute and 2 seconds");
    assert.equal(TestTimeFormatter.formatDuration(62), "1 minute and 2 seconds");
    assert.equal(TestTimeFormatter.formatDuration(3600), "1 hour");
    assert.equal(TestTimeFormatter.formatDuration(3662), "1 hour, 1 minute and 2 seconds");
    assert.equal(TestTimeFormatter.formatDuration(120), "2 minutes");
  })
})

