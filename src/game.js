import { Player } from './battleship';

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

// double loop, less than 10, create new div and assign class or data index with given values from loops, append to container board

export { gameLoop };
