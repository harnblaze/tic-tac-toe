class TicTacToe {
  constructor() {
    this._turn = 0;
    this._field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this._isWinner = false;
    this._winner = null;
    this._checkArray = [];
  }

  getCurrentPlayerSymbol() {
    return this._turn % 2 ? 'o' : 'x';
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this._field[rowIndex][columnIndex]) {
      this._field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this._turn++;
      this.isFinished();
    }
  }

  isFinished() {
    return this.isWinner() || this.isDraw();
  }

  getWinner() {
    return this.isWinner() ? this._winner : null;
  }

  noMoreTurns() {
    return this._turn > 8;
  }

  isDraw() {
    if (!this.isWinner() && this.noMoreTurns()) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this._field[rowIndex][colIndex];
  }

  _check(arr) {
    if (arr.every((el) => el === arr[0] && el !== null)) {
      this._winner = arr[0];
      this._isWinner = true;
      return true;
    }
    return false;
  }

  isWinner() {
    this._checkArray = this._field;
    this._checkArray = this._checkArray.concat([
      this._field.map((el) => el[0]),
    ]);
    this._checkArray = this._checkArray.concat([
      this._field.map((el) => el[1]),
    ]);
    this._checkArray = this._checkArray.concat([
      this._field.map((el) => el[2]),
    ]);
    this._checkArray = this._checkArray.concat([
      this._field.map((el) => el[2]),
    ]);
    this._checkArray = this._checkArray.concat([
      this._field.map((el, i) => el[i]),
    ]);
    this._checkArray = this._checkArray.concat([
      this._field.map((el, i, arr) => el[arr.length - i - 1]),
    ]);
    return this._checkArray.some((el) => this._check(el));
  }
}

module.exports = TicTacToe;
