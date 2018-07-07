package src;

import java.util.stream.IntStream;
import static java.lang.Math.toIntExact;

/**
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044/
 * @author Paul Mcloughlin
 */

public class SumKata
{
    /**
     * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
     * @param input (required) array of negative and positive numbers
     * @return return an array with count of positives and sum of negatives
     */
    public static int[] countPositivesSumNegatives(int[] input)
    {
        if(input == null || input.length == 0) {
            return new int[]{};
        }

        int negativeSum = IntStream.of(input).filter(x -> Integer.signum(x) == -1).sum();
        int positiveCount = toIntExact(IntStream.of(input).filter(x -> Integer.signum(x) > 0).count());

        return new int[]{positiveCount, negativeSum};
    }
}