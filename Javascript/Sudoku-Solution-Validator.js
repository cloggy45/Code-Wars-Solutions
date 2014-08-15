(function() {

    /*
     http://www.codewars.com/kata/sudoku-solution-validator
     */

    function validSolution(gameBoard) {

        // Keeps track of digits encountered in each row, column and 3x2 grid
        var state = {
            1 : false,
            2 : false,
            3 : false,
            4 : false,
            5 : false,
            6 : false,
            7 : false,
            8 : false,
            9 : false
        }

        var testStatus = true;

        // Performs our horizontal and vertical checks for duplicate values.
        for(var outside=0;outside<gameBoard.length;outside++) {
            var horizontalState = Object.create(state); // Keeps track of the digits encountered in each row
            var verticalState = Object.create(state); // Keeps track of the digits encountered in each column

            // Checks for duplicate values in row and column.
            for(var inside=0;inside<gameBoard[outside].length;inside++) {

                if(gameBoard[outside][inside] === 0) return false;

                // If we've already encountered this digit, then there is a duplicate
                if(horizontalState[gameBoard[outside][inside]] !== true) {
                    horizontalState[gameBoard[outside][inside]] = true;
                } else {
                    return false;
                }

                // If we haven't encountered this digit.
                if(verticalState[gameBoard[inside][outside]] !== true) {
                    verticalState[gameBoard[inside][outside]] = true;
                } else {
                    return false;
                }
            }
        }

        // Contains the starting and end points for each 3x3 grid
        var argOne = [0,3,7];
        var argTwo = [2,6,9];
        var argThree = [0,3,6];
        var argFour = [2,5,9];

        // We then check each 3x3 grid.
        for(var i=0;i<3;i++) {
            for (var n=0;n<1;n++) {
                for(var b=0;b<3;b++) {
                    checkDuplicates3x3Grid(argOne[i], argTwo[i], argThree[b], argFour[b]);
                }
            }
        }

        function checkDuplicates3x3Grid(horStart, horEnd, verStart, verEnd) {
            var squareState = Object.create(state); // Keeps track of the digits encountered in each 3x3 grid
            for(var i = horStart ; i < horEnd ; i++) {
                for(var n = verStart ; n < verEnd ; n++) {
                    if(squareState[gameBoard[i][n]] === false) {
                        squareState[gameBoard[i][n]] = true;
                    } else {
                        testStatus = false;
                        return false;
                    }
                }
            }
        }
        return testStatus
    }

})()


