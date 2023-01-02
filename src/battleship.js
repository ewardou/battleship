function Ship(length) {
    if (length < 2 || !length || length > 5) {
        throw new Error('Length must be greater than 0 and less than 6');
    }
    let sunk = false;
    let numberOfHits = 0;
    function isSunk() {
        sunk = numberOfHits >= length;
        return sunk;
    }
    function hit() {
        if (sunk) return 'The ship has already sunk';
        numberOfHits += 1;
        isSunk();
        return numberOfHits;
    }

    return {
        hit,
        isSunk,
    };
}

function Gameboard() {
    const availableCoordinates = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            availableCoordinates.push(JSON.stringify([i, j]));
        }
    }
    const shipSurroundCoordinates = [];

    function removeCoordinates(...coordinates) {
        while (coordinates.length !== 0) {
            const index = availableCoordinates.indexOf(
                JSON.stringify(coordinates[0])
            );
            availableCoordinates.splice(index, 1);
            coordinates.shift();
        }
    }

    function checkAvailabilityForPlacing(...coordinates) {
        coordinates.forEach((element) => {
            if (
                !availableCoordinates.includes(JSON.stringify(element)) ||
                shipSurroundCoordinates.includes(JSON.stringify(element))
            ) {
                throw new Error(
                    `Coordinate ${JSON.stringify(element)} is already occupied`
                );
            }
        });
    }

    const currentShips = [];

    function checkBoardLimits(coordinate) {
        if (
            coordinate[0] > 9 ||
            coordinate[1] > 9 ||
            coordinate[0] < 0 ||
            coordinate[1] < 0
        ) {
            throw new Error('Outside of board limits');
        }
    }
    function getAdjacentCoordinates(cell, recordArray, diagonals = false) {
        let array = [];
        if (cell[0] >= 0 && cell[0] < 9) {
            array.push([cell[0] + 1, cell[1]]);
        }
        if (cell[0] <= 9 && cell[0] > 0) {
            array.push([cell[0] - 1, cell[1]]);
        }
        if (cell[1] >= 0 && cell[1] < 9) {
            array.push([cell[0], cell[1] + 1]);
        }
        if (cell[1] <= 9 && cell[1] > 0) {
            array.push([cell[0], cell[1] - 1]);
        }

        if (diagonals) {
            if (cell[0] <= 9 && cell[0] > 0 && cell[1] <= 9 && cell[1] > 0) {
                array.push([cell[0] - 1, cell[1] - 1]);
            }
            if (cell[0] <= 9 && cell[0] > 0 && cell[1] >= 0 && cell[1] < 9) {
                array.push([cell[0] - 1, cell[1] + 1]);
            }
            if (cell[0] >= 0 && cell[0] < 9 && cell[1] <= 9 && cell[1] > 0) {
                array.push([cell[0] + 1, cell[1] - 1]);
            }
            if (cell[0] >= 0 && cell[0] < 9 && cell[1] >= 0 && cell[1] < 9) {
                array.push([cell[0] + 1, cell[1] + 1]);
            }
        }

        array = array.filter(
            (pair) => !recordArray.includes(JSON.stringify(pair))
        );
        return array;
    }

    function placeShip(startingCoordinate, length, isHorizontal = true) {
        const coordinates = [];
        for (let i = 0; i < length; i++) {
            let newCoordinate;
            if (isHorizontal) {
                newCoordinate = [startingCoordinate[0] + i].concat([
                    startingCoordinate[1],
                ]);
            } else {
                newCoordinate = [startingCoordinate[0]].concat([
                    startingCoordinate[1] + i,
                ]);
            }
            checkBoardLimits(newCoordinate);
            coordinates.push(newCoordinate);
        }
        checkAvailabilityForPlacing(...coordinates);
        const newShip = Ship(length);
        newShip.coordinates = coordinates;
        removeCoordinates(...coordinates);
        coordinates.forEach((pair) => {
            const surrounding = getAdjacentCoordinates(
                pair,
                shipSurroundCoordinates,
                true
            );
            surrounding.forEach((sub) => {
                shipSurroundCoordinates.push(JSON.stringify(sub));
            });
        });
        currentShips.push(newShip);
        return newShip;
    }

    const missedShots = [];
    const successfulShots = [];

    function receiveAttack(coordinates) {
        checkBoardLimits(coordinates);
        if (availableCoordinates.includes(JSON.stringify(coordinates))) {
            missedShots.push(JSON.stringify(coordinates));
            removeCoordinates(coordinates);
            return missedShots;
        }
        if (
            missedShots.includes(JSON.stringify(coordinates)) ||
            successfulShots.includes(JSON.stringify(coordinates))
        ) {
            throw new Error('Shot already taken at this coordinate');
        }
        let value;
        currentShips.forEach((obj) => {
            obj.coordinates.forEach((shipCoordinate) => {
                if (
                    JSON.stringify(shipCoordinate) ===
                    JSON.stringify(coordinates)
                ) {
                    value = obj.hit();
                    successfulShots.push(JSON.stringify(coordinates));
                }
            });
        });
        if (value) return value;
    }

    function allShipsSunk() {
        return currentShips.every((ship) => ship.isSunk());
    }

    function getBoardInformation() {
        return {
            currentShips,
            missedShots,
            successfulShots,
        };
    }

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        getBoardInformation,
        getAdjacentCoordinates,
    };
}

function Player(name, isCPU = false) {
    const gameboard = Gameboard();
    const previousAttacks = [];
    function attackEnemy(enemy, coordinate) {
        enemy.gameboard.receiveAttack(coordinate);
        previousAttacks.push(JSON.stringify(coordinate));
        return 'Enemy attacked';
    }
    function generateRandomCoordinate() {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }

    function placeShipRandomly() {
        try {
            if (gameboard.getBoardInformation().currentShips.length >= 5) {
                return;
            }
            const randomCoordinate = generateRandomCoordinate();
            let randomLength = Math.floor(Math.random() * 6);
            while (randomLength < 2) {
                randomLength = Math.floor(Math.random() * 6);
            }
            const randomDirection = Math.floor(Math.random() * 2) === 0;
            gameboard.placeShip(
                randomCoordinate,
                randomLength,
                randomDirection
            );
            placeShipRandomly();
        } catch {
            placeShipRandomly();
        }
    }

    let previousLastHit = null;
    let lastHit;
    function computerAttack(enemy) {
        function getAdjacentCell(cell) {
            const array = gameboard.getAdjacentCoordinates(
                cell,
                previousAttacks
            );
            const option = Math.floor(Math.random() * array.length);
            return array[option];
        }

        function attackAdjacentCell() {
            let newCoordinate;
            if (lastHit) {
                newCoordinate = getAdjacentCell(lastHit);
            }
            if (newCoordinate === [] || !newCoordinate) {
                lastHit = previousLastHit;
                newCoordinate = generateRandomCoordinate();
                while (
                    previousAttacks.includes(JSON.stringify(newCoordinate))
                ) {
                    newCoordinate = generateRandomCoordinate();
                }
            }
            attackEnemy(enemy, newCoordinate);
            if (
                enemy.gameboard
                    .getBoardInformation()
                    .successfulShots.includes(JSON.stringify(newCoordinate))
            ) {
                previousLastHit = lastHit;
                lastHit = newCoordinate;
            }
            return 'Computer attack';
        }
        return attackAdjacentCell();
    }

    function shipsLeft() {
        const { currentShips } = gameboard.getBoardInformation();
        let count = 0;
        for (let i = 0; i < currentShips.length; i++) {
            if (currentShips[i].isSunk()) {
                count += 1;
            }
        }
        return currentShips.length - count;
    }

    if (isCPU) {
        return {
            name,
            gameboard,
            computerAttack,
            shipsLeft,
            placeShipRandomly,
        };
    }
    return {
        name,
        gameboard,
        attackEnemy,
        shipsLeft,
    };
}

export { Ship, Gameboard, Player };
