import { Player } from './battleship';
import './style.css';
import { createBoard, renderGameboard } from './dom';

const player1 = Player('player1');
const cpu = Player('cpu', true);
const para = document.createElement('p');

player1.gameboard.placeShip([0, 0], 2, true);
player1.gameboard.placeShip([3, 0], 3, false);
player1.gameboard.placeShip([6, 6], 2, false);
player1.gameboard.placeShip([6, 0], 4, true);
player1.gameboard.placeShip([4, 9], 5, true);

cpu.gameboard.placeShip([0, 7], 3, true);
cpu.gameboard.placeShip([0, 2], 4, false);
cpu.gameboard.placeShip([9, 2], 3, false);
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

const cells = document.querySelectorAll('.cpu>div[data-coordinate]');
cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        const coordinate = JSON.parse(
            event.target.getAttribute('data-coordinate')
        );
        gameLoop(player1, cpu, coordinate);
        cell.classList.remove('available');
    });
});

export { gameLoop };
