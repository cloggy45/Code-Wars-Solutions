/**
 * Your task in order to complete this Kata is to write a function which formats a durationInSeconds, given as a number of seconds, in a human-friendly way.
 * https://www.codewars.com/kata/human-readable-durationInSeconds-format
 * @author Paul Mcloughlin
 */


class TimeFormatter {
  private timeframesSelected: Map<string, number>
  private timeframesInSeconds: Map<string, number>

  constructor() {

    this.timeframesInSeconds = new Map([
      ["years", 2073600],
      ["days", 86400],
      ["hours", 3600],
      ["minutes", 60],
    ]);

    this.timeframesSelected = new Map([
      ["years", 0],
      ["days", 0],
      ["hours", 0],
      ["minutes", 0],
      ["seconds", 0]
    ]);
  }

  public divideSecondsIntoTimeframes(durationInSeconds: number): void {
    while(durationInSeconds > 60) {
      for(let [timeframe, timeframeSecs] of this.timeframesInSeconds) {
        if(durationInSeconds > timeframeSecs) {
          durationInSeconds -= timeframeSecs;
          let prevTimeFrameSecs = this.timeframesSelected.get(timeframe);
          prevTimeFrameSecs += 1;
          this.timeframesSelected.set(timeframe, prevTimeFrameSecs);
        }
      }
    }
    this.timeframesSelected.set("seconds", durationInSeconds);
  }

  /**
   * 
   * @param durationInSeconds in seconds
   */
  public durationInSeconds(durationInSeconds: number): string {
    if (durationInSeconds === 0) return "now";

    return "50";
  }
}

export { TimeFormatter };
