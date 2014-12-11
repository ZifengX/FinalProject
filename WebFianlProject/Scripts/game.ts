/**
    Game Name: Plane Crash
    Name: Zifeng Xu, RenFa Feng
    Last Modify by: Zifeng Xu, RenFa Feng
    Date Last Modified: 2014, Dec.9th
    Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                          https://github.com/BladeWork/FinalProject
**/

/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/meteorolite.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/univers.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/explosion.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/enemybullet.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="managers/bulletmanager.ts" />
/// <reference path="managers/enemybulletmanager.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/playHard.ts" />
/// <reference path="states/playImpossible.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/instructions.ts" />

//game containers
var stage: createjs.Stage;
var game: createjs.Container;

// game objects
var univers: objects.Univers;
var plane: objects.Plane;
var coin: objects.Coin;
var meteorolites = []; // meteorolite array
var enemies = []; // enemy array
var scoreboard: objects.Scoreboard;

// object managers
var collision: managers.Collision;
var bulletManager: managers.BulletManager;
var enemyBulletManager: managers.EnemyBulletManager;

var tryAgain: objects.Button
var playButton: objects.Button;
var playButtonHard: objects.Button;
var playButtonImpossible: objects.Button;

// global game variables
var screenScale: number;
var currentState: number;
var currentStateFunction;
var gamePlaying: boolean = false;
var swirl: createjs.Bitmap;

// Preload function - Loads Assets and initializes game;
function preload(): void {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);

    stage = new createjs.Stage(document.getElementById('canvas'));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    showStartScreen();
}

//Start Screen
function showStartScreen() {
    game = new createjs.Container();
    var screenFont: string = "100px Consolas";
    var introPlaneWidth: number = 447;
    var introPlaneHeight: number = 195;

    // Add univers Image
    var introUnivers = new createjs.Bitmap("assets/images/univers.jpg");
    game.addChild(introUnivers);

    // Add Swirl
    swirl = new createjs.Bitmap("assets/images/swirl.png");

    swirl.regX = 512;
    swirl.regY = 512;
    swirl.y = stage.canvas.height * 0.5;
    swirl.x = stage.canvas.width * 0.5;
    game.addChild(swirl);

    // Add Large Plane Image
    if (stage.canvas.width == constants.GAME_WIDTH) {
        var introPlane = new createjs.Bitmap("assets/images/plane4.png");
    }
    else {
        var introPlane = new createjs.Bitmap("assets/images/plane1.png");
        screenFont = "50px Consolas";
        introPlaneWidth = 112;
        introPlaneHeight = 108;
    }

    introPlane.regX = introPlaneWidth * 0.5;
    introPlane.regY = introPlaneHeight * 0.5;
    introPlane.x = stage.canvas.width * 0.5;
    introPlane.y = stage.canvas.height * 0.5;
    game.addChild(introPlane);

    // Add Mail Pilot Label
    var mailPilotLabel = new createjs.Text("Plane Crash", screenFont, constants.LABEL_COLOUR);
    mailPilotLabel.regX = mailPilotLabel.getBounds().width * 0.5;
    mailPilotLabel.regY = mailPilotLabel.getBounds().height * 0.5;
    mailPilotLabel.x = stage.canvas.width * 0.5;
    mailPilotLabel.y = 80;
    game.addChild(mailPilotLabel);

    stage.addChild(game);        
}

// init called after Assets have been loaded.
function init(): void {
    //add play button after loader complete
    playButton = new objects.Button(stage.canvas.width * 0.5, 560, "play");
    game.addChild(playButton);

    currentState = constants.MENU_STATE;
    //Start the game after play button is pressed
    playButton.on("click", function (e) {

        gamePlaying = true;
        changeState(currentState);
    });
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (window.innerWidth < constants.GAME_WIDTH) {
        stage.canvas.width = 320;
    }
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
    screenScale = stage.canvas.width / constants.GAME_WIDTH;

    stage.update();
}

// Game Loop
function gameLoop(event): void {
    if (gamePlaying == true) {
        currentStateFunction();
    } else {
        swirl.rotation -= 0.5;
    }

    stage.update();
}

function changeState(state: number): void {



    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.PLAY_HARD_STATE:
            // instantiate play hard level screen
            currentStateFunction = states.playHardState;
            states.playHard();
            break;

        case constants.PLAY_IMPOSSIBLE_STATE:
            // instantiate play impossible screen
            currentStateFunction = states.playImpossibleState;
            states.playImpossible();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;

        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.instructionState;
            // instantiate game over screen
            states.Instructions();
            break;
    }
}
