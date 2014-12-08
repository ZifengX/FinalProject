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
/// <reference path="../managers/collision.ts" />
/// <reference path="../managers/bulletmanager.ts" />



module states {
    export function playState() {
        univers.update();
        coin.update();
        plane.update();

        //One Enemy
        enemies[0].update();

        for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
            meteorolites[count].update();
        }

        bulletManager.update();
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

    // Fire the bullet when the mouse is clicked
    function mouseDown() {
        bulletManager.firing = true;
    }

    function mouseUp() {
        bulletManager.firing = false;
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        univers = new objects.Univers(stage, game);
        coin = new objects.Coin(stage, game);
        plane = new objects.Plane(stage, game);

        enemies[0] = new objects.Enemy(game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple clouds
        for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
            meteorolites[count] = new objects.Meteorolite(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Bullet Manager
        bulletManager = new managers.BulletManager(plane, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(plane, coin, meteorolites, scoreboard, game, enemies, bulletManager.bullets);

        game.addEventListener("mousedown", mouseDown);
        game.addEventListener("pressup", mouseUp);

        stage.addChild(game);
    }
} 