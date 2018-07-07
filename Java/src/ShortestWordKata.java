
/***
 * Solution for https://www.codewars.com/kata/shortest-word/
 * @author Paul Mcloughlin
 */

public class ShortestWordKata {

	/***
	 * Given a string of words, return the length of the shortest words.
 	 * @param sentence (required) is a string of words, strings will never be empty.
	 * @return return length of shortest word as int
	 */
	public static int findShort(String sentence) {
      String[] words = sentence.split(" ");
      
		int length = words[0].length();
  
  		for(String word : words) {
  			if(length > word.length()) {
  				length = word.length();
  			}
  		}
      return length;
    }
}