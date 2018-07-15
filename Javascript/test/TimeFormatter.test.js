const assert = require("assert");
const sinon = require("sinon");

let { TimeFormatter } = require("../src/TimeFormatter/TimeFormatter");

describe("formatDuration", () => {
	let testTimeFormatter;

	beforeEach(() => {
		testTimeFormatter = new TimeFormatter();
	});

	describe("getNextTimeFrame", () => {
		it("If we select last element, return the same element", () => {
			assert.equal(testTimeFormatter.getNextTimeframe("years"), "years");
		})

		it("We should get the next time frame", () => {
			assert.equal(testTimeFormatter.getNextTimeframe("seconds"), "minutes");
		})
	})

	describe("divideSecondsIntoTimeframes function tests", () => {
		let testTimeFormatterSpy, expectedResult;

		beforeEach(() => {
			testTimeFormatterSpy = sinon.spy(testTimeFormatter, "divideSecondsIntoTimeframes");
			expectedResult = new Map([
				["years", 0],
				["days", 0],
				["hours", 0],
				["minutes", 0],
				["seconds", 0]
			]);
		});

		afterEach(()=> {
			testTimeFormatterSpy.restore();
		})

		it("should set 1 hour, 1 minute and 2 seconds", () => {
			
			expectedResult.set("seconds", 2).set("minutes", 1).set("hours", 1);
			
			testTimeFormatter.divideSecondsIntoTimeframes(3662);
			
			const timeframesSelected =  testTimeFormatterSpy.thisValues[0].timeframesSelected
			
			assert.deepEqual(timeframesSelected, expectedResult);
		});

		it("should set hours to 1", () => {
			expectedResult.set("hours", 1)
			testTimeFormatter.divideSecondsIntoTimeframes(3600);
			
			const timeframesSelected =  testTimeFormatterSpy.thisValues[0].timeframesSelected
      
			assert.deepEqual(timeframesSelected, expectedResult);
		})


		it("should set seconds to 1", () => {
      
      expectedResult.set("seconds", 1);
			testTimeFormatter.divideSecondsIntoTimeframes(1);
			
			const timeframesSelected =  testTimeFormatterSpy.thisValues[0].timeframesSelected
      
			assert.deepEqual(timeframesSelected, expectedResult);
		});

		it("should set seconds to 2", () => {
      
      expectedResult.set("minutes", 1).set("seconds", 2);
			testTimeFormatter.divideSecondsIntoTimeframes(62);
			
			const timeframesSelected =  testTimeFormatterSpy.thisValues[0].timeframesSelected
      
			assert.deepEqual(timeframesSelected, expectedResult);
		});
    
		it("should set minutes to 1", () => {
      
			expectedResult.set("minutes", 1);
		  testTimeFormatter.divideSecondsIntoTimeframes(60);

			const timeframesSelected =  testTimeFormatterSpy.thisValues[0].timeframesSelected

		  assert.deepEqual(timeframesSelected, expectedResult);
		});
	});
});
