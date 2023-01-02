import { Player } from './battleship';
import './style.css';
import { createBoard, renderGameboard, createShipDivs } from './dom';

const player1 = Player('player1');
const cpu = Player('cpu', true);
cpu.placeShipRandomly();
const para = document.createElement('p');
para.textContent = `Ships left: ${cpu.shipsLeft()}`;

function gameLoop(player, computer, coordinate) {
    if (computer.gameboard.allShipsSunk() || player.gameboard.allShipsSunk()) {
        throw new Error('Game already ended');
    }
    player.attackEnemy(computer, coordinate);
    renderGameboard(cpu);
    para.textContent = `Ships left: ${cpu.shipsLeft()}`;
    if (computer.gameboard.allShipsSunk()) {
        return 'CPU lost';
    }
    computer.computerAttack(player);
    renderGameboard(player1);
    if (player.gameboard.allShipsSunk()) {
        return 'Player 1 lost';
    }
}
const cpuBoard = createBoard(cpu);
cpuBoard.append(para);
const board = createBoard(player1);
document.body.append(board, cpuBoard);
renderGameboard(player1);
renderGameboard(cpu);

const cpuCells = document.querySelectorAll('.cpu>div[data-coordinate]');
cpuCells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        const coordinate = JSON.parse(
            event.target.getAttribute('data-coordinate')
        );
        gameLoop(player1, cpu, coordinate);
        cell.classList.remove('available');
    });
});

function removeShipsDiv() {
    if (player1.shipsLeft() >= 5) {
        document.querySelector('.ships-container').remove();
    }
}
const playerCells = document.querySelectorAll('.player1>div[data-coordinate]');
const dragOver = function (e) {
    e.preventDefault();
};
const drop = function (e) {
    const info = e.dataTransfer.getData('text/plain');
    const length = JSON.parse(info)[0];
    const state = JSON.parse(info)[1];
    const startCoordinate = e.target.getAttribute('data-coordinate');
    player1.gameboard.placeShip(JSON.parse(startCoordinate), length, state);
    renderGameboard(player1);
    document.querySelector(`[data-info="${info}"`).remove();
    removeShipsDiv();
};
playerCells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', drop);
});

document.body.append(createShipDivs());

export { gameLoop };
