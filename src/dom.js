function createBoard() {
    const container = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('data-coordinate', `[${j},${i}]`);
            container.appendChild(cell);
        }
    }
    return container;
}

function renderGameboard(gameboard) {
    const board = gameboard.getBoardInformation();
    board.missedShots.forEach((pair) => {
        const cell = document.querySelector(`div[data-coordinate="${pair}"]`);
        cell.classList.add('miss');
        cell.textContent = 'X';
    });
    board.successfulShots.forEach((pair) => {
        const cell = document.querySelector(`div[data-coordinate="${pair}"]`);
        cell.classList.add('success');
        cell.textContent = 'o';
    });
    board.currentShips.forEach((ship) => {
        ship.coordinates.forEach((pair) => {
            const cell = document.querySelector(
                `div[data-coordinate="${JSON.stringify(pair)}"]`
            );
            cell.classList.add('ship');
        });
    });
}

export { createBoard, renderGameboard };

// double loop, less than 10, create new div and assign class or data index with given values from loops, append to container board
