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
      ["year", 2073600],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
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
