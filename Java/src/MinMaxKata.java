
import java.util.Arrays;

/***
 * https://www.codewars.com/kata/the-highest-profit-wins/
 * @author Paul Mcloughlin
 */

class MinMaxKata {
    /***
     * function that returns both the minimum and maximum number of the given list/array.
     * @param arr (required) array of integers
     * @return array containing 2 elements, the min and max of arr
     */
    public static int[] minMax(int[] arr) {
        Arrays.sort(arr);
        return new int[]{arr[0],arr[arr.length-1]};
    }
}
