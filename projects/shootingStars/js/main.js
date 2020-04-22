var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'area', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('castle', 'assets/castle.png');
    game.load.image('ground', 'assets/platform-skull.png');
    game.load.image('grave', 'assets/platform-grave.png');
    game.load.image('star', 'assets/coin.png');
    game.load.spritesheet('dude', 'assets/link.png', 32, 48);
    game.load.audio('playlist3', 'assets/Shooting Stars.mp3');
    game.load.audio('playlist1', 'assets/Colors.mp3');
    game.load.spritesheet('enemy', 'assets/momon.png', 32, 48);
    game.load.audio('hit', 'assets/smash.mp3');
    game.load.audio('over', 'assets/Evil Mortys Theme.mp3');
    game.load.audio('point', 'assets/point.mp3');
    game.load.image('live', 'assets/link life.png');

}
var platforms;
var player;
var cursors;
var stars;
var music;
var hit;
var over;
var point;
var enemy;
var life;
var life2;
var life3;

var score = 0;
var scoreText;
var lives = 3;
var liveText;

var mov = 0;
var movdis = 0;

function create() {
	
    //  Musica de fondo
    music = game.add.audio('playlist1');
    music.play();
	
    //  Sistema de fisicas ARCADE
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  Imagen de fondo del juego
    game.add.sprite(0, 0, 'castle');

    //  Crear el grupo de plataformas del juego
    platforms = game.add.group();

    //  Activar fisicas de la plataforma para permitir colisiones
    platforms.enableBody = true;

    // Crear el piso, se usa una imagen de textura
    var ground = platforms.create(0, game.world.height - 48, 'grave');
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(3.15, 1.5);
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Crear las plataformas a lo largo del mapa
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;
	
	ledge = platforms.create(200, 50, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(250, 125, 'ground');
	ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;
	
    ledge = platforms.create(1000, 575, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(1150, 500, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(950, 355, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 575, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(100, 500, 'ground');
    ledge.scale.setTo(0.25, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(850, 250, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;

    ledge = platforms.create(625, 100, 'ground');
    ledge.scale.setTo(0.5, 0.5);
    ledge.body.immovable = true;
	
	// The player and its settings
    createplayer();
    createenemy();
	
	//  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
	
	//  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;

    //  Crear personas
    for (var i = 0; i < 5; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(1 + (Math.random() * 1260), 1 + (Math.random() * 650), 'star');
        star.scale.setTo(1.5, 1.5);
        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.2;
    }

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();
	
	//  The score
    scoreText = game.add.text(16, 16, 'Saves: 0', { fontSize: '32px', fill: '#0FF' });

    liveText = game.add.text(16, 64, 'Lives:', {fontSize: '32px', fill: '#0FF'})

    life  = game.add.sprite(100, 64, 'live');
    life2 = game.add.sprite(125, 64, 'live');
    life3 = game.add.sprite(150, 64, 'live');

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
	//  Collide the player and the stars with the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
	
	//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap(player, enemy, collisionenemy);
	
	//  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(enemy, platforms);
	
	//  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    enemy.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

    if(movdis <= 0){
        moveenemy();
    }
    

    if(mov <= 100){
        enemy.body.velocity.x = -150;
        enemy.animations.play('left');
        movdis --;
    }
    if(mov > 100 && mov<= 200){
        enemy.body.velocity.x = 150;
        enemy.animations.play('right');
        movdis --;
    }
    if(mov > 200 && mov <= 300){
        enemy.frame = 4;
        enemy.animations.stop();
        movdis --;
    }
    if (mov > 300)
    {
        enemy.body.velocity.y = -350;
        movdis= movdis -200;
    }
}

function collectStar (player, star) {
    
    // Removes the star from the screen
    star.kill();
	
	//  Add and update the score
    score += 1;
    scoreText.text = 'Saves: ' + score;

    var star = stars.create(1 + (Math.random() * 1260), 1 + (Math.random() * 600), 'star');
    star.scale.setTo(1.5, 1.5);
    star.body.gravity.y = 300;
    star.body.bounce.y = 0.2;

    point = game.add.audio('point');
    point.play();

    if((score % 5) == 0){
        enemy.kill();
        createenemy();
    }

    if(score == 100){
        music.stop();
        music = game.add.audio('playlist3');
        music.play();
    }
}

function moveenemy (){
    movdis = (1 + (Math.random() * 200));
    mov = ((Math.random() * 400));
}

function collisionenemy(player){

    lives --;

    player.kill();

    liveText.text = 'Lives: ';

    if(lives == 0){
        liveText.text = 'GAME OVER';
        music.stop();
        over = game.add.audio('over');
        over.play();
    }
    else{
        createplayer();
    }

    if(lives == 2){
        life3.kill();
    }
    if(lives == 1){
        life2.kill();
    }
    if(lives == 0){
        life.kill();
    }

    hit = game.add.audio('hit');
    hit.play();
}

function createplayer(){
    player = game.add.sprite(32, game.world.height - 150, 'dude');
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.25;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
}

function createenemy(){
    enemy = game.add.sprite((Math.random() * 1150), (Math.random() * 400), 'enemy');

    game.physics.arcade.enable(enemy);

    enemy.body.bounce.y = 0.25;
    enemy.body.gravity.y = 400;
    enemy.body.collideWorldBounds = true;

    enemy.animations.add('left', [0, 1, 2, 3], 10, true);
    enemy.animations.add('right', [5, 6, 7, 8], 10, true);
}