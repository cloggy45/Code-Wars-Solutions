const assert = require("assert");
const sinon = require("sinon");

let { TimeFormatter } = require("../src/TimeFormatter/TimeFormatter");

describe("formatDuration", () => {
	let testTimeFormatter;

	before(() => {
		testTimeFormatter = new TimeFormatter();
	});

	describe("divideSecondsIntoTimeframes function tests", () => {
		let spy, expectedResult;

		beforeEach(() => {
			spy = sinon.spy(testTimeFormatter, "divideSecondsIntoTimeframes");

			expectedResult = new Map([
				["years", 0],
				["days", 0],
				["hours", 0],
				["minutes", 0],
				["seconds", 0]
			]);
		});

		it("should set seconds to 2", () => {
			expectedResult.set("minutes", 1).set("seconds", 2);

			testTimeFormatter.divideSecondsIntoTimeframes(62);
			const state = spy.thisValues[0];
			const timeframesSelected = state.timeframesSelected;

			assert.deepEqual(timeframesSelected, expectedResult);
		});
		// it('should set minute to 2', () => {

		//   testTimeFormatter.divideSecondsIntoTimeframes(120);
		//   const state = spy.thisValues[0];
		//   const timeframesSelected = state.timeframesSelected;

		//   assert.deepEqual(timeframesSelected, expectedResult)
		// })
	});
});
