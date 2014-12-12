/**
     Game Name: Star Wars
    Name: Zifeng Xu
    Last Modify by: Zifeng Xu
    Date Last Modified: 2014, Dec.12th
    Description: It is about a war happened inthe universe, you are a pilot fighting with
                 enemies to save the earth. Move your mouse left or right,
                 Click left button to fire, Earn coins 100pt/one, Watch out there is 
                  a 'BIG ONE'.
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
    export function gameWinState() {
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
    export function gameWin() {
        var gameWinLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameWinLabel = new objects.Label(stage.canvas.width / 2, 40, "YOU WIN!!");
        game.addChild(gameWinLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.score.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(stage.canvas.width / 2, 300, "again");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", playAgainClicked);

        stage.addChild(game);

    }
}