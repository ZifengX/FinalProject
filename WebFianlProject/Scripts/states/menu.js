/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/univers.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function insButtonClicked(event) {
        var instructionLabel = new objects.Label(stage.canvas.width / 2, 60, "This is a Car Crash game.");
        var instructionLabel1 = new objects.Label(stage.canvas.width / 2, 100, "Rasberry = 100 points.");
        var instructionLabel2 = new objects.Label(stage.canvas.width / 2, 140, "Bomb = - 1 live");
        game.addChild(instructionLabel, instructionLabel1, instructionLabel2);
    }
    states.insButtonClicked = insButtonClicked;
    function menuState() {
        univers.update();
        plane.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);
        plane = new objects.Plane(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Game Name Label
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Car Crash");
        game.addChild(gameNameLabel);
        // Buttons
        insButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        playButton = new objects.Button(stage.canvas.width / 2, 310, "play");
        game.addChild(playButton, insButton);
        //Event Listener
        insButton.addEventListener("click", insButtonClicked);
        playButton.addEventListener("click", playButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map