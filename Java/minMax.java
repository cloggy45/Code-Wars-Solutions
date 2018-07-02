import java.util.Arrays;

class MinMax {
    /**
     * Write a function that returns both the minimum and maximum number of the given list/array.
     * https://www.codewars.com/kata/the-highest-profit-wins/
     **/
    public static int[] minMax(int[] arr) {
        Arrays.sort(arr);
        return new int[]{arr[0],arr[arr.length-1]};
    }
}
