import org.junit.Test;

import static org.junit.Assert.*;

public class BumpsTheRoadKataTest {

    @Test
    public void bumps() {
        assertEquals(BumpsTheRoadKata.bumps("n"), "Woohoo!");
        assertEquals(BumpsTheRoadKata.bumps("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
        assertEquals(BumpsTheRoadKata.bumps("______n___n_"), "Woohoo!");
        assertEquals(BumpsTheRoadKata.bumps("nnnnnnnnnnnnnnnnnnnnn"), "Car Dead");
    }
}