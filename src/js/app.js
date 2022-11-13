import GamePlay from './gameplay';

const gameContainer = document.querySelector('.container-game');
const boardsize = 5;

const gamePlay = new GamePlay(boardsize, gameContainer);

gamePlay.drawUi();
gamePlay.startPainting();
