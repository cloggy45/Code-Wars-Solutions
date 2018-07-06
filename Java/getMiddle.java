/**
 * You are going to be given a word. Your job is to return the middle character of the word.
 * https://www.codewars.com/kata/56747fd5cb988479af000028/train/java
 */

class Kata {
    /***
     * @param {string} A random word
     * @return {string} returns middle char if word length is odd, or middle 2 if even.
     */
    public static String getMiddle(String word) {
        int middleIndex = word.length() / 2;
        return word.length() % 2 == 0
                ? word.substring(middleIndex-1, middleIndex+1)
                : Character.toString(word.charAt(middleIndex));

    }
}
