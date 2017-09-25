console.log("hello World");

const board = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
};
// markBoard(1, "X");

function markBoard(position, mark) {
    board[position] = mark;
}
var whosTurn = function() {
  if ()
}
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function createBoard(){
  console.log(  board[1] + "|" + board [2] + "|" + board[3] + "|" + "\n"
              + board[4] + "|" + board [5] + "|" + board[6] + "|" + "\n"
              + board[7] + "|" + board [8] + "|" + board[9] + "|" + "\n" );
}

createBoard()
