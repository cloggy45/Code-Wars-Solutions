class School {
    /***
     * Return the average of the given array rounded down to its nearest integer.
     * https://www.codewars.com/kata/get-the-mean-of-an-array/train/java
     * @param marks
     * @return {number} average of the given array
     */
    public static int getAverage(int[] marks){
        int acc = 0;
        for(int mark : marks) {
            acc += mark;
        }
        return (acc / marks.length);
    }
}

