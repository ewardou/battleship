import { Ship } from './battleship';

// test('Ship factory returns object', () => {
//     expect(Ship(3)).toEqual({ length: 3, hits: 0, sink: false });
// });

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
