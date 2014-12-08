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
    states.playButton;
    states.instructionsButton;
    var soundtrack;
    function insButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        soundtrack.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.insButtonClicked = insButtonClicked;
    function playButtonClicked(event) {
        stage.removeChild(game);
        plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    // State function
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
        soundtrack = createjs.Sound.play('soundtrack', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        // Show Cursor
        stage.cursor = "default";
        // Game Name Label
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 20, "Car Crash");
        game.addChild(gameNameLabel);
        // Display Buttons
        states.instructionsButton = new objects.Button(stage.canvas.width / 2, 240, "instructions");
        states.playButton = new objects.Button(stage.canvas.width / 2, 310, "play");
        game.addChild(states.playButton, states.instructionsButton);
        //Event Listener
        states.instructionsButton.addEventListener("click", insButtonClicked);
        states.playButton.addEventListener("click", playButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map