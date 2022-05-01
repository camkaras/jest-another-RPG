const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());

const Player = require('../lib/Player.js');

test('creates a player object', () => {
    const player = new Player('Dave');
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});