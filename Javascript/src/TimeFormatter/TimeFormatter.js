"use strict";
/**
 * Your task in order to complete this Kata is to write a function which formats a durationInSeconds, given as a number of seconds, in a human-friendly way.
 * https://www.codewars.com/kata/human-readable-durationInSeconds-format
 * @author Paul Mcloughlin
 */
Object.defineProperty(exports, "__esModule", { value: true });
class TimeFormatter {
    constructor() {
        this.timeframesInSeconds = new Map([
            ["years", 2073600],
            ["days", 86400],
            ["hours", 3600],
            ["minutes", 60],
            ["seconds", 1]
        ]);
        this.timeframesSelected = new Map([
            ["years", 0],
            ["days", 0],
            ["hours", 0],
            ["minutes", 0],
            ["seconds", 0]
        ]);
    }
    /**
     * @param timeframe current timeframe
     * @return next timeframe in list unless last timeframe
     */
    getNextTimeframe(timeframe) {
        if (timeframe === "years")
            return timeframe;
        const list = new Array("seconds", "minutes", "hours", "days", "years");
        return list[list.indexOf(timeframe) + 1];
    }
    /**
     *
     * @param durationInSeconds
     */
    divideSecondsIntoTimeframes(durationInSeconds) {
        while (durationInSeconds !== 0) {
            for (let [timeframe, timeframeSecs] of this.timeframesInSeconds) {
                if (durationInSeconds >= timeframeSecs) {
                    durationInSeconds -= timeframeSecs;
                    let prevTimeFrameSecs = this.timeframesSelected.get(timeframe);
                    prevTimeFrameSecs += 1;
                    this.timeframesSelected.set(timeframe, prevTimeFrameSecs);
                }
            }
        }
    }
    /**
     *
     * @param durationInSeconds in seconds
     */
    durationInSeconds(durationInSeconds) {
        if (durationInSeconds === 0)
            return "now";
        return "50";
    }
}
exports.TimeFormatter = TimeFormatter;
//# sourceMappingURL=TimeFormatter.js.map