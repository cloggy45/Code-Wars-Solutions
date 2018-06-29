import java.util.Arrays;

public class Kata {
    /**
     * Simple, given a string of words, return the length of the shortest word(s).
     * String will never be empty and you do not need to account for different data types.
     * https://www.codewars.com/kata/shortest-word/java
     **/
     
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