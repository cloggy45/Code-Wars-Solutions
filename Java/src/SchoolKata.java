
/***
 * It's the academic year's end, fateful moment of your school report.
 * The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
 * https://www.codewars.com/kata/get-the-mean-of-an-array/train/java
 * @author Paul Mcloughlin
 */

class SchoolKata {
    /***
     * Return the average of the given array rounded down to its nearest integer.
     * @param marks (required) integer array of student marks
     * @return average of all the marks
     */
    public static int getAverage(int[] marks){
        int acc = 0;
        for(int mark : marks) {
            acc += mark;
        }
        return (acc / marks.length);
    }
}

