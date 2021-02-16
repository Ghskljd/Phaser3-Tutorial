const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade'
		arcade: {
			gravity: {y: 300},
			debug: false
			}
		},
	scene: {
	   preload: preload,
	   create: create,
	   update: update
	}
};

const game = new Phaser.Game(config);

function preload() {
this.load.image('sky', 'assests/sky.png');
this.load.image('ground', 'assests/platform.png');
this.load.image('bomb', 'assests/star.png');
this.load.image('dude', 'assests/dude.png', {frameWidth: 32, frameHeight: 48});
}

let platforms;

function create() {
this.add.image(400, 300, 'sky');

platforms = this.physics.add.staticGroup();
platforms.create(400, 568, 'ground').setScale(2).refreshBody();
platforms.create(600, 400, 'ground'):
platforms.create(50, 250, 'ground');
platforms.create(750, 220, 'ground');

this.add.image(400, 300, 'star');
}

function update(){
}
