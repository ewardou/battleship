import { Player } from './battleship';
import './style.css';
import { createBoard, renderGameboard } from './dom';

const player1 = Player();
const cpu = Player(true);

player1.gameboard.placeShip([0, 0], 2, true);
player1.gameboard.placeShip([3, 0], 3, false);
player1.gameboard.placeShip([6, 6], 2, false);
player1.gameboard.placeShip([6, 0], 4, true);
player1.gameboard.placeShip([4, 9], 5, true);

cpu.gameboard.placeShip([0, 7], 3, true);
cpu.gameboard.placeShip([0, 2], 4, false);
cpu.gameboard.placeShip([9, 2], 3, false);
cpu.randomAttack(player1);
cpu.randomAttack(player1);

function gameLoop(player, computer, coordinate) {
    player.attackEnemy(computer, coordinate);
    if (computer.gameboard.allShipsSunk()) {
        return 'CPU lost';
    }
    computer.randomAttack(player);
    if (player.gameboard.allShipsSunk()) {
        return 'Player 1 lost';
    }
}

const board = createBoard();
document.body.appendChild(board);
renderGameboard(player1.gameboard);

export { gameLoop };
