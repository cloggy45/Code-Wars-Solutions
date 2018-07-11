/***
 * https://www.codewars.com/kata/sort-and-star
 */

 class SortAndStarKata {
    /***
     * You must sort it alphabetically (case-sensitive!!) and then return the first value.
     * The returned value must be a string, and have "***" between each of its letters.
     * @param words vector of string(s).
     * @return The returned value must be a string, and have "***" between each of its letters.
     */
    static String twoSort(String[] words) {
        java.util.Arrays.sort(words);
        return String.join("***", words[0].split(""));
    }
}
