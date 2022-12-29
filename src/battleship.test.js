import { Ship, Gameboard, Player } from './battleship';
import { gameLoop } from './game';

test('Ship factory throws if length is not valid', () => {
    expect(() => Ship()).toThrow();
    expect(() => Ship(0)).toThrow();
    expect(() => Ship(6)).toThrow();
});

test('Hit function', () => {
    const testShip = Ship(3);
    testShip.hit();
    expect(testShip.hit()).toEqual(2);
});

test('isSunk function', () => {
    const testShip = Ship(2);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBeTruthy();
});

test('isSunk function 2', () => {
    const testShip = Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBeFalsy();
});

test('Place ship horizontally on Game board', () => {
    const testBoard = Gameboard();
    expect(JSON.stringify(testBoard.placeShip([1, 0], 3))).toStrictEqual(
        JSON.stringify({
            coordinates: [
                [1, 0],
                [2, 0],
                [3, 0],
            ],
            hit: Ship(3).hit,
            isSunk: Ship(3).isSunk,
        })
    );
});

test('Place ship vertically on board', () => {
    const testBoard = Gameboard();
    expect(JSON.stringify(testBoard.placeShip([2, 3], 4, false))).toStrictEqual(
        JSON.stringify({
            coordinates: [
                [2, 3],
                [2, 4],
                [2, 5],
                [2, 6],
            ],
            hit: Ship(4).hit,
            isSunk: Ship(4).isSunk,
        })
    );
});

test('Trying to place a ship outside of the board limits throws an error', () => {
    const testBoard = Gameboard();
    expect(() => testBoard.placeShip([9, 0], 3, true)).toThrow();
});

test('Trying to place a ship outside of the board limits throws an error 2', () => {
    const testBoard = Gameboard();
    expect(() => testBoard.placeShip([-2, 4], 3)).toThrow();
});

test('Trying to place a ship on an already occupied coordinate throws error', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([3, 4], 3);
    expect(() => testBoard.placeShip([5, 4], 2, false)).toThrow();
});

test('Attack empty coordinate', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([0, 2], 2, false);
    expect(JSON.stringify(testBoard.receiveAttack([2, 3]))).toStrictEqual(
        JSON.stringify(['[2,3]'])
    );
});

test("Attack ship and call ship's hit func", () => {
    const testBoard = Gameboard();
    testBoard.placeShip([0, 2], 3);
    expect(testBoard.receiveAttack([1, 2])).toBe(1);
});

test('Trying to hit the same coordinate twice will produce an error', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([4, 3], 2);
    testBoard.receiveAttack([1, 1]);
    testBoard.receiveAttack([4, 3]);
    expect(() => testBoard.receiveAttack([1, 1])).toThrow();
    expect(() => testBoard.receiveAttack([4, 3])).toThrow();
});

test('Destroy a ship and get its state', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([0, 0], 2);
    testBoard.receiveAttack([0, 0]);
    testBoard.receiveAttack([1, 0]);
    expect(testBoard.allShipsSunk()).toBeTruthy();
});

test('Destroy a float and get confirmation', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([0, 0], 2);
    testBoard.placeShip([5, 4], 2, false);
    testBoard.receiveAttack([0, 0]);
    testBoard.receiveAttack([1, 0]);
    testBoard.receiveAttack([5, 4]);
    testBoard.receiveAttack([5, 5]);
    expect(testBoard.allShipsSunk()).toBeTruthy();
});

test('Get negative response when there are ships still floating', () => {
    const testBoard = Gameboard();
    testBoard.placeShip([0, 0], 2);
    testBoard.placeShip([5, 4], 2, false);
    testBoard.receiveAttack([0, 0]);
    testBoard.receiveAttack([1, 0]);
    testBoard.receiveAttack([5, 5]);
    expect(testBoard.allShipsSunk()).toBeFalsy();
});

test('Every player has its own game board', () => {
    const testPlayer = Player();
    const testPlayer2 = Player();
    expect(JSON.stringify(testPlayer)).toStrictEqual(
        JSON.stringify({ gameboard: Gameboard() })
    );
    expect(JSON.stringify(testPlayer2)).toStrictEqual(
        JSON.stringify({ gameboard: Gameboard() })
    );
});

test('Player 1 attacks player 2', () => {
    const testPlayer = Player();
    const testPlayer2 = Player();
    expect(testPlayer.attackEnemy(testPlayer2, [1, 1])).toBe('Enemy attacked');
});

test('Player cannot hit same coordinate twice', () => {
    const testPlayer = Player();
    const testPlayer2 = Player();
    testPlayer.attackEnemy(testPlayer2, [1, 1]);
    expect(() => testPlayer.attackEnemy(testPlayer2, [1, 1])).toThrow();
});

test('Computer can make random attacks', () => {
    const cpu = Player(true);
    const testPlayer = Player();
    expect(cpu.randomAttack(testPlayer)).toBe('Computer attack');
});

test('Computer can make 100 attacks without repeating any', () => {
    const cpu = Player(true);
    const testPlayer = Player();
    for (let i = 0; i < 99; i++) {
        cpu.randomAttack(testPlayer);
    }
    expect(cpu.randomAttack(testPlayer)).toBe('Computer attack');
});

test('Computer cannot make more than 100 random attacks', () => {
    const cpu = Player(true);
    const testPlayer = Player();
    for (let i = 0; i < 100; i++) {
        cpu.randomAttack(testPlayer);
    }
    expect(() => cpu.randomAttack(testPlayer)).toThrow();
});

test.only('Game loop returns the winner', () => {
    const player1 = Player();
    const cpu = Player(true);
    player1.gameboard.placeShip([3, 0], 3, false);
    cpu.gameboard.placeShip([0, 7], 2, true);
    gameLoop(player1, cpu, [0, 7]);
    expect(gameLoop(player1, cpu, [1, 7])).toBe('CPU lost');
});
