/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/

/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/univers.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    export function winState() {
        univers.update();
    }

    // Restart Game when Try Again Button is clicked
    export function playAgainClicked(event: MouseEvent) {
        stage.removeChild(game);
        if (plane != null)
            plane.destroy();
        createjs.Sound.stop();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }


    // Game Over Scene
    export function win() {
        var winLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);

        // Show Cursor
        stage.cursor = "default";

        console.log("11111");

        // Display win
        winLabel = new objects.Label(stage.canvas.width / 2, 40, "You Win");
        game.addChild(winLabel);

        console.log("22222");
        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        console.log("33333");
        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        console.log("44444");
        // Display Try Again Button
        playAgain = new objects.Button(stage.canvas.width / 2, 300, "back");
        game.addChild(tryAgain);
        console.log("55555");
        playAgain.addEventListener("click", playAgainClicked);
        
        stage.addChild(game);

    }
}