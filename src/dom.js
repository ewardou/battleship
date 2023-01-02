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

function rotate() {
    const oneDiv = document.querySelector('.ships-container>div');
    const allDivs = document.querySelectorAll('.ships-container>div');
    const [, direction] = JSON.parse(oneDiv.getAttribute('data-info'));
    if (direction) {
        allDivs.forEach((div) => {
            const [length] = JSON.parse(div.getAttribute('data-info'));
            div.setAttribute('data-info', `[${length}, false]`);
            div.setAttribute('style', `width:35px;height:${length * 35}px`);
        });
    } else {
        allDivs.forEach((div) => {
            const [length] = JSON.parse(div.getAttribute('data-info'));
            div.setAttribute('data-info', `[${length}, true]`);
            div.setAttribute('style', `height:35px;width:${length * 35}px`);
        });
    }
}
function dragStart(e) {
    e.dataTransfer.clearData();
    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-info'));
    setTimeout(() => {
        this.classList.add('hide');
    }, 0);
}
function dragEnd() {
    this.classList.remove('hide');
}

function createShipDivs() {
    const container = document.createElement('div');
    container.classList.add('ships-container');
    const rotateButton = document.createElement('button');
    rotateButton.textContent = 'Rotate';
    rotateButton.addEventListener('click', rotate);
    container.append(rotateButton);
    const shipDivs = [];
    for (let i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        let length = i;
        if (i < 2) {
            length = 3;
        }
        div.classList.add('ship');
        div.setAttribute('draggable', 'true');
        div.setAttribute('data-info', `[${length}, true]`);
        div.setAttribute('style', `height:35px;width:${length * 35}px`);
        div.addEventListener('dragstart', dragStart);
        div.addEventListener('dragend', dragEnd);
        shipDivs.push(div);
    }
    container.append(...shipDivs);
    return container;
}

export { createBoard, renderGameboard, createShipDivs };
