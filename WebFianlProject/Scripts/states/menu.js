/**
Game Name: Plane Crash
Name: Zifeng Xu, RenFa Feng
Last Modify by: Zifeng Xu, RenFa Feng
Date Last Modified: 2014, Dec.9th
Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
Rivision History: see https://github.com/ZifengX/FinalProject.git
https://github.com/BladeWork/FinalProject
**/
/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/univers.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    states.playButton;
    states.instructionsButton;
    states.playButtonHard;
    states.playButtonImpossible;
    states.soundtrack;

    function insButtonClicked(event) {
        stage.removeChild(game);
        states.soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.insButtonClicked = insButtonClicked;

    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function playButtonHardClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_HARD_STATE;
        changeState(currentState);
    }
    states.playButtonHardClicked = playButtonHardClicked;
    function playButtonImpossibleClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_IMPOSSIBLE_STATE;
        changeState(currentState);
    }
    states.playButtonImpossibleClicked = playButtonImpossibleClicked;

    // State function
    function menuState() {
        univers.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Game Name Label
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Star Wars");
        game.addChild(gameNameLabel);

        // Display Buttons
        states.instructionsButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        states.playButton = new objects.Button(stage.canvas.width / 2, 340, "easy");
        states.playButtonHard = new objects.Button(stage.canvas.width / 2, 420, "meduim");
        states.playButtonImpossible = new objects.Button(stage.canvas.width / 2, 500, "hard");

        game.addChild(states.instructionsButton, states.playButton, states.playButtonHard, states.playButtonImpossible);

        //Event Listener
        states.instructionsButton.addEventListener("click", insButtonClicked);
        states.playButton.addEventListener("click", playButtonClicked);
        states.playButtonHard.addEventListener("click", playButtonHardClicked);
        states.playButtonImpossible.addEventListener("click", playButtonImpossibleClicked);

        states.soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
