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
            if (!availableCoordinates.includes(JSON.stringify(element))) {
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

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
    };
}

function Player(isCPU = false) {
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

    function randomAttack(enemy) {
        if (previousAttacks.length >= 100) {
            throw new Error('All coordinates have been attacked');
        }
        let randomCoordinate = generateRandomCoordinate();
        while (previousAttacks.includes(JSON.stringify(randomCoordinate))) {
            randomCoordinate = generateRandomCoordinate();
        }
        attackEnemy(enemy, randomCoordinate);
        return 'Computer attack';
    }
    if (isCPU) {
        return {
            gameboard,
            randomAttack,
        };
    }
    return {
        gameboard,
        attackEnemy,
    };
}

export { Ship, Gameboard, Player };
