/**
 * https://www.codewars.com/kata/is-it-a-number
 */

public class MyUtilities{
    /**
     * Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
     * @param {string}
     * @return {boolean} returns true if string is valid single integer or float, or false if not.
     */
    public boolean isDigit(String s)
    {
        try {
            Float resultFloat = Float.valueOf(s);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }
}