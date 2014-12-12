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
    // Boss Class
    var Boss = (function (_super) {
        __extends(Boss, _super);
        function Boss(game) {
            _super.call(this, "enemy1");
            this.onStage = true;
            this.hp = 500;
            this.leftOrRight = true;
            this.game = game;
            this.dy = 2;
            this.dx = 2;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }
        Boss.prototype.update = function () {
            if (this.y < 120)
                this.y += this.dy;

            if (this.leftOrRight) {
                this.x -= this.dx;
                if (this.x <= 50) {
                    this.leftOrRight = false;
                }
            } else if (!this.leftOrRight) {
                this.x += this.dx;
                if (this.x >= 700) {
                    this.leftOrRight = true;
                }
            }

            this.checkEngine();
        };

        Boss.prototype.reset = function () {
            this.enginePlay = false;

            // Reset the enemy image location
            if (this.hp == 0) {
                stage.removeChild(game);
                createjs.Sound.stop();
                game.removeAllChildren();
                game.removeAllEventListeners();
                currentState = constants.GAME_WIN_STATE;
                changeState(currentState);
            }
        };

        Boss.prototype.checkEngine = function () {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            } else if (this.enginePlay == false) {
                this.engineSound.stop();
            }
        };
        return Boss;
    })(objects.GameObject);
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map
