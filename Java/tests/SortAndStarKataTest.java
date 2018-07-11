import org.junit.Test;

import static org.junit.Assert.*;

public class SortAndStarKataTest {
    @Test
    public void twoSort() {
        assertEquals("b***i***t***c***o***i***n", SortAndStarKata.twoSort(new String[] {"bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"}));
        assertEquals("a***r***e", SortAndStarKata.twoSort(new String[] {"turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"}));
    }
}