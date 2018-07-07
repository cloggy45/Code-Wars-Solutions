import java.util.HashMap;
import java.util.Map;

/**
 * In this kata, your job is to create a class Dictionary which you can add words to and their entries.
 * https://www.codewars.com/kata/interactive-dictionary
 */

public class DictionaryKata
{
    private Map<String, String> entries;

    void Dictionary() {
        this.entries = new HashMap<>();
    }

    /***
     * Add word to
     * @param word (required) the actual word
     * @param definition (required) the definition associated with the given word
     */
    public void newEntry(String word, String definition) {
        this.entries.put(word, definition);
    }

    /***
     * Lookup word
     * @param word (required) that we use to look up
     * @return definition of given word
     */
    public String look (String word) {
        if(this.entries.containsKey(word)) {
            return String.format("Word: %s - Definition: %s", word, this.entries.get(word));
        } else {
            return String.format("Cant find entry for %s", word);
        }
    }
}
