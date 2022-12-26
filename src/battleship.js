function Ship(length) {
    if (length < 1 || !length || length > 5) {
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

export { Ship };
