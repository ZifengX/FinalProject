/// <reference path="../constants.ts" />
module states {
    // Scene Variables
    export var backButton: objects.Button;
    var instructionsFont: string = constants.LABEL_FONT;
    var lineSpace: number = 45;
    var buttonPosition: number = 0.8;

    // Back Button Event Handler
    export function backButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    // Instruction State
    export function instructionState() {
        univers.update();
    }

    // Instructions Scene
    export function Instructions() {
        var gameInstructions = [];
        var instructionsArray = [];

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);
        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        instructionsArray = [
            "Game Instructions:",
            "You are a Mail Pilot, delivering",
            "to the islands. Fly over an ",
            "pickup your pay but be careful",
            "too close to the clouds. Your",
            "will fall apart if it is hit by",
            "too many times. Steer with the",
            "or by touching the screen.",
            "Good Luck!"
        ];

        // Adjust Instructions for smaller screen size
        if (screenScale < 1) {
            instructionsFont = "14px Consolas";
            lineSpace = 30;
            buttonPosition = 0.5
        }

        // Display each line of instructions
        for (var line = 0; line < instructionsArray.length; line++) {

            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.LABEL_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.02;
            gameInstructions[line].y = 20 + (lineSpace * line);

            game.addChild(gameInstructions[line]);
        }

        // Display Back Button
        backButton = new objects.Button(stage.canvas.width * buttonPosition, 500, "back");
        game.addChild(backButton);
        backButton.addEventListener("click", backButtonClicked);

        // Show Cursor
        stage.cursor = "default";

        // Add Scene to Game Container
        stage.addChild(game);
    }
} 