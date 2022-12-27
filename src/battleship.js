function Ship(length) {
    if (length < 2 || !length || length > 5) {
        throw new Error('Length must be greater than 0 and less than 6');
    }
    let sunk = false;
    let hits = 0;
    function hit() {
        if (sunk) return 'The ship has already sunk';
        hits += 1;
        return hits;
    }
    function isSunk() {
        sunk = hits >= length;
        return sunk;
    }
    return {
        length,
        hits,
        sunk,
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

    function checkAvailability(...coordinates) {
        coordinates.forEach((element) => {
            if (!availableCoordinates.includes(JSON.stringify(element))) {
                throw new Error(
                    `Coordinate ${JSON.stringify(element)} is already filled`
                );
            }
        });
    }

    function placeShip(startingCoordinate, length, isHorizontal = true) {
        const coordinates = [startingCoordinate];
        for (let i = 1; i < length; i++) {
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
            if (newCoordinate[0] > 9 || newCoordinate[1] > 9) {
                throw new Error('Outside of board limits');
            }
            coordinates.push(newCoordinate);
        }
        checkAvailability(...coordinates);
        const newShip = Ship(length);
        const obj = { coordinates, ship: newShip };
        removeCoordinates(...coordinates);
        return obj;
    }

    return {
        placeShip,
    };
}

export { Ship, Gameboard };
