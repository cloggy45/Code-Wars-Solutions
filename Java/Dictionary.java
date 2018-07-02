import java.util.HashMap;
import java.util.Map;

/**
 * In this kata, your job is to create a class Dictionary which you can add words to and their entries.
 * https://www.codewars.com/kata/interactive-dictionary
 */

public class Dictionary
{
    Map<String, String> entries;

    Dictionary() {
        this.entries = new HashMap<>();
    }

    /***
     * Add word and definition to HashMap
     * @param word
     * @param definition
     */
    public void newEntry(String word, String definition) {
        this.entries.put(word, definition);
    }

    /***
     * Lookup word inside HashMap
     * @param word
     * @return {string}
     */
    public String look (String word) {
        if(this.entries.containsKey(word)) {
            return String.format("Word: %s - Definition: %s", word, this.entries.get(word));
        } else {
            return String.format("Cant find entry for %s", word);
        }
    }
}
