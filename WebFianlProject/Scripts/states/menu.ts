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
module states {
    export var playButton: objects.Button;
    export var instructionsButton: objects.Button;
    export var playButtonHard: objects.Button;
    export var playButtonImpossible: objects.Button;
    export var soundtrack: createjs.SoundInstance;

    export function insButtonClicked(event: MouseEvent) {

        stage.removeChild(game);
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
        
    }
    export function playButtonHardClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_HARD_STATE;
        changeState(currentState);

    }
    export function playButtonImpossibleClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_IMPOSSIBLE_STATE;
        changeState(currentState);

    }

    // State function
    export function menuState() {
        univers.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

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
        instructionsButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        playButton = new objects.Button(stage.canvas.width / 2, 340, "easy");
        playButtonHard = new objects.Button(stage.canvas.width / 2, 420, "meduim");
        playButtonImpossible = new objects.Button(stage.canvas.width / 2, 500, "hard");

        game.addChild(instructionsButton, playButton, playButtonHard, playButtonImpossible);

        //Event Listener
        instructionsButton.addEventListener("click", insButtonClicked)
        playButton.addEventListener("click", playButtonClicked);
        playButtonHard.addEventListener("click", playButtonHardClicked)
        playButtonImpossible.addEventListener("click", playButtonImpossibleClicked);

        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        stage.addChild(game);       
    }
}  