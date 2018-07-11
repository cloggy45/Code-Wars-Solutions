/***
 * https://www.codewars.com/kata/bumps-in-the-road
 * @author Paul Mcloughlin
 */


class BumpsTheRoadKata {
    /***
     * Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
     * Unfortunately for you, your drive is very bumpy!
     * @param road is a string showing either flat road ("_") or bumps ("n")
     * @return return "Woohoo!", over 15 bumps return "Car Dead".
     */
    static String bumps(final String road) {
        return road.chars().filter(c -> c == 'n').count() > 15 ? "Car Dead" : "Woohoo!";
    }
}