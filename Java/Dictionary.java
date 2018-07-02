import java.util.List;

public class Dictionary
{
    List<String, String> listWord;

    Dictionary() {
        this.listWord = new ArrayList<>();
    }

    public void newEntry(String word, String definition) {
        this.listWord.add(word, definition);
        System.out.print(definition);
    }

    public void look (String word) {
        this.listWord.get(word);

    }
}

Dictionary d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");

System.out.println(d.look("Apple"));

System.out.println(d.look("Banana"));
