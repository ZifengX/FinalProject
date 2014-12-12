/// <reference path="../constants.ts" />
var states;
(function (states) {
    // Scene Variables
    states.backButton;
    var instructionsFont = constants.LABEL_FONT;
    var lineSpace = 45;
    var buttonPosition = 0.8;

    // Back Button Event Handler
    function backButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.backButtonClicked = backButtonClicked;

    // Instruction State
    function instructionState() {
        univers.update();
    }
    states.instructionState = instructionState;

    // Instructions Scene
    function Instructions() {
        var gameInstructions = [];
        var instructionsArray = [];

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);
        states.soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        instructionsArray = [
            "Game Instructions:",
            "It is about a war happened in",
            "the universe, you are a pilot  ",
            "fighting with enemies to save the",
            "earth.",
            "Move your mouse left or right",
            "Click left button to fire",
            "Earn coins 100pt/one",
            "Watch out there is a 'BIG ONE'.",
            "Good Luck!"
        ];

        // Adjust Instructions for smaller screen size
        if (screenScale < 1) {
            instructionsFont = "14px Consolas";
            lineSpace = 30;
            buttonPosition = 0.5;
        }

        for (var line = 0; line < instructionsArray.length; line++) {
            gameInstructions[line] = new createjs.Text(instructionsArray[line], instructionsFont, constants.LABEL_COLOUR);
            gameInstructions[line].x = stage.canvas.width * 0.02;
            gameInstructions[line].y = 20 + (lineSpace * line);

            game.addChild(gameInstructions[line]);
        }

        // Display Back Button
        states.backButton = new objects.Button(stage.canvas.width * buttonPosition, 500, "back");
        game.addChild(states.backButton);
        states.backButton.addEventListener("click", backButtonClicked);

        // Show Cursor
        stage.cursor = "default";

        // Add Scene to Game Container
        stage.addChild(game);
    }
    states.Instructions = Instructions;
})(states || (states = {}));
