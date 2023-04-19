// const trackKeys = require('../code/chapter/16_game');

// test('Validation our TrackKeys', () => {
// 	expect(trackKeys(["a", "d", "w","A", "D", "W", "ф", "в", "ц","Ф", "В", "Ц", "ArrowLeft", "ArrowRight", "ArrowUp"])).toEqual({});
// });

//.................................................................. 

// const runAnimation = require('../code/chapter/16_game');
// const runLevel = require('../code/chapter/16_game');

// test('Validation our Function "runAnimation" ', () => {
// 	expect(runAnimation).toEqual(runLevel);
// });

//.................................................................. 

// const runGame = require('../code/chapter/16_game');
// const GAME_LEVELS = require('../code/levels');
// const DOMDisplay = require('../code/levels');


// test('Validation our Function "runGame" ', () => {
// 	expect(runGame(GAME_LEVELS, DOMDisplay)).toBe(runGame);
// });

//.................................................................. 

// const Vec = require('../code/levels');

// describe('test for methods Class Vec', () => {
	
// 	test('Validation our Class "Vec" ', () => {
// 		const x = 0;
// 		const y = -0.5;
// 		expect(Vec.plus).toBe(Vec.plus);
// 	});
// 	test('Validation our Class "Vec" ', () => {
// 		const x = 0;
// 		const y = -0.5;
// 		expect(Vec.times).toBe(Vec.times);
// 	});

// });

// ..................................................................

// const State = require('../code/levels');

// describe('test for methods Class State', () => {
	
// 	test('Validation our Class "State" ', () => {

// 		expect(State.start).toEqual(level, level.startActors, "playing");
// 	});
// 	test('Validation our Class "State" ', () => {

// 		expect(State.player).toEqual(a => a.type == "player");
// 	});

// });

// ..................................................................

// const Level = require('../code/levels');

// describe('test for methods Class Level', () => {
	
// 	test('Validation our Class "Level" ', () => {

// 		expect(Level).toEqual(type || "empty");
// 	});

// });

// ..................................................................

// const Player = require('../code/levels');

// describe('test for methods Class Player', () => {
	
// 	test('Validation our Class "Player" ', () => {

// 		expect(Player.type).toEqual("player");
// 	});
// 	test('Validation our Class "Player" ', () => {

// 		expect(Player.create).toEqual( pos(0, -0.5));
// 	});

// });

// ..................................................................

// const Lava = require('../code/levels');

// describe('test for methods Class Lava', () => {
	
// 	test('Validation our Class "Lava" ', () => {

// 		expect(Lava.type).toEqual("lava");
// 	});
// 	test('Validation our Class "Lava" ', () => {
		
// 		if (ch == "=") {
//       return new Lava(pos, new Vec(2, 0));
//     } else if (ch == "|") {
//       return new Lava(pos, new Vec(0, 2));
//     } else if (ch == "v") {
//       return new Lava(pos, new Vec(0, 3), pos);
//     }
// 		expect(Lava.create).toEqual(pos, ch);
// 	});

// });

// ..................................................................

// const Coin = require('../code/levels');

// describe('test for methods Class Coin', () => {
	
// 	test('Validation our Class "Coin" ', () => {

// 		expect(Coin.type).toEqual("Coin");
// 	});
// 	test('Validation our Class "Coin" ', () => {
		
// 		expect(Coin.create).toEqual(basePos, basePos,Math.random() * Math.PI * 2);
// 	});

// });

// ..................................................................

// const DOMDisplay = require('../code/levels');

// describe('test for methods Class DOMDisplay', () => {
	
// 	test('Validation our Class "DOMDisplay" ', () => {

// 		expect(DOMDisplay.clear).toEqual(this.dom);
// 	});

// });

// ..................................................................

// const drawGrid = require('../code/levels');

// describe('test for function "drawGrid"', () => {
	
// 	test('Validation our function "drawGrid" ', () => {

// 		expect(drawGrid(level)).toEqual(drawGrid);
// 	});

// });

// ..................................................................

// const drawActors = require('../code/levels');

// describe('test for function "drawAxtors"', () => {
	
// 	test('Validation our function "drawActors" ', () => {

// 		expect(drawActors()).toEqual(drawActors);
// 	});

// });