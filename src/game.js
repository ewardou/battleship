import { Player } from './battleship';
import './style.css';
import {
    createBoard,
    renderGameboard,
    createShipDivs,
    createRestartButton,
} from './dom';

const player1 = Player('player1');
const cpu = Player('cpu', true);
cpu.placeShipRandomly();
const para = document.createElement('p');
para.textContent = `Ships left: ${cpu.shipsLeft()}`;
const message = document.querySelector('header>p');

function gameLoop(player, computer, coordinate) {
    if (computer.gameboard.allShipsSunk() || player.gameboard.allShipsSunk()) {
        throw new Error('Game already ended');
    }
    player.attackEnemy(computer, coordinate);
    renderGameboard(cpu);
    para.textContent = `Ships left: ${cpu.shipsLeft()}`;
    if (computer.gameboard.allShipsSunk()) {
        message.textContent = 'Player won';
        document.body.appendChild(createRestartButton());
    }
    computer.computerAttack(player);
    renderGameboard(player1);
    if (player.gameboard.allShipsSunk()) {
        message.textContent = 'Cpu won';
        document.body.appendChild(createRestartButton());
    }
}
const board = createBoard(player1);
document.body.append(board);
renderGameboard(player1);

function addCPUCellsListener() {
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
}

function removeShipsDiv() {
    if (player1.shipsLeft() >= 5) {
        document.querySelector('.ships-container').remove();
        const cpuBoard = createBoard(cpu);
        cpuBoard.append(para);
        message.textContent = '';
        document.body.append(cpuBoard);
        renderGameboard(cpu);
        addCPUCellsListener();
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
