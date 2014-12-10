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
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/univers.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />



module states {

    export function playState() {
        univers.update();
        coin.update();
        plane.update();

        for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
            meteorolites[count].update();
        }

        collision.update();
        scoreboard.update();

         // Change to Game Over State if the player has no lives left
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            plane.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);
        coin = new objects.Coin(stage, game);
        plane = new objects.Plane(stage, game);
        
        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
            meteorolites[count] = new objects.Meteorolite(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);


        // Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, meteorolites, scoreboard, game);

        stage.addChild(game);
    }
} 