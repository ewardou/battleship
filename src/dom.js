import { Player } from './battleship';

function createBoard(player) {
    const container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-coordinate', `[${j},${i}]`);
            if (player.name === 'cpu') {
                cell.classList.add('available');
            }
            container.appendChild(cell);
        }
    }
    container.classList.add(player.name);
    return container;
}

function renderGameboard(player) {
    const board = player.gameboard.getBoardInformation();
    board.missedShots.forEach((pair) => {
        const cell = document.querySelector(
            `.${player.name}>div[data-coordinate="${pair}"]`
        );
        cell.classList.add('miss');
    });
    board.successfulShots.forEach((pair) => {
        const cell = document.querySelector(
            `.${player.name}>div[data-coordinate="${pair}"]`
        );
        cell.classList.add('success');
    });
    if (player.name !== 'cpu') {
        board.currentShips.forEach((ship) => {
            ship.coordinates.forEach((pair) => {
                const cell = document.querySelector(
                    `.${player.name}>div[data-coordinate="${JSON.stringify(
                        pair
                    )}"]`
                );
                cell.classList.add('ship');
            });
        });
    }
}

export { createBoard, renderGameboard };
