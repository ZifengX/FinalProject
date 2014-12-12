var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
Game Name: Star Wars
Name: Zifeng Xu, RenFa Feng
Last Modify by: Zifeng Xu, RenFa Feng
Date Last Modified: 2014, Dec.12th
Description: It is about a war happened inthe universe, you are a pilot fighting with
enemies to save the earth. Move your mouse left or right,
Click left button to fire, Earn coins 100pt/one, Watch out there is
a 'BIG ONE'.
Rivision History: see https://github.com/ZifengX/FinalProject.git
https://github.com/BladeWork/FinalProject
**/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // enemy Class
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game) {
            _super.call(this, "enemy2");
            this.onStage = true;
            this.game = game;
            this.dy = 2;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }
        Enemy.prototype.update = function () {
            this.y += this.dy;
            if (this.y > -stage.canvas.height) {
                this.enginePlay = true;
            }

            if (this.y > stage.canvas.height * 2) {
                this.reset();
            }
            this.checkEngine();
        };

        Enemy.prototype.reset = function () {
            this.engineSound.stop();
            this.enginePlay = false;

            // Reset the enemy image location
            var positionX = Math.floor(Math.random() * stage.canvas.width);

            // if (positionX > 50 && positionX < 700)
            if (positionX > 100 && positionX < 650)
                this.x = positionX;
            this.y = -stage.canvas.height * 1.2;
        };

        Enemy.prototype.checkEngine = function () {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            } else if (this.enginePlay == false) {
                this.engineSound.stop();
            }
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map
