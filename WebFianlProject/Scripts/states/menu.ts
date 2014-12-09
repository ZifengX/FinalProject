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
/// <reference path="../objects/univers.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export var playButton: objects.Button;
    export var instructionsButton: objects.Button;
    var soundtrack: createjs.SoundInstance;

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

        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Show Cursor
        stage.cursor = "default";

        // Game Name Label
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Car Crash");
        game.addChild(gameNameLabel);

        // Display Buttons
        instructionsButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        playButton = new objects.Button(stage.canvas.width / 2, 340, "play");

        playButtonHard = new objects.Button(stage.canvas.width / 2, 420, "again");
        game.addChild(playButtonHard);

        playButtonImpossible = new objects.Button(stage.canvas.width / 2, 500, "instructions");
        game.addChild(playButtonImpossible);
        game.addChild(instructionsButton, playButton, playButtonHard, playButtonImpossible);


        //Event Listener
        instructionsButton.addEventListener("click", insButtonClicked)
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);       
    }
}  