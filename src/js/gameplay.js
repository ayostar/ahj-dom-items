import { getRandomInt, bindToDOM } from './utils';

export default class GamePlay {
  constructor(boardSize, container) {
    this.boardSize = boardSize;
    this.container = container;
    this.boardElements = null;
    this.cells = [];
  }

  drawUi() {
    bindToDOM(this.container);

    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('container-gameboard');
    this.container.append(gameBoardContainer);

    const gameBoard = document.createElement('div');
    gameBoard.classList.add('gameboard');
    gameBoardContainer.append(gameBoard);

    this.boardElements = this.container.querySelector('.gameboard');
    this.boardElements.setAttribute(
      'style',
      `grid-template-columns: repeat(${this.boardSize}, 1fr)`,
    );

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      this.boardElements.append(cellElement);
    }

    this.cells = Array.from(this.boardElements.children);
  }

  startPainting() {
    let randomIndex;

    setInterval(() => {
      const randomNumber = getRandomInt(0, this.cells.length - 1);
      this.deactivateGoblin();

      if (randomNumber === randomIndex) {
        if (randomNumber === this.cells.length - 1) {
          randomIndex -= 1;
        } else {
          randomIndex += 1;
        }
      } else {
        randomIndex = randomNumber;
      }

      this.cells[randomIndex].classList.add('goblin');
    }, 1000);
  }

  deactivateGoblin() {
    const goblinActiveCell = [...this.cells].find((n) =>
      n.classList.contains('goblin'),
    );
    if (goblinActiveCell) {
      goblinActiveCell.classList.remove('goblin');
    }
  }
}
