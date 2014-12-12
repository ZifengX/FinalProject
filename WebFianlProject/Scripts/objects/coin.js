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
    // Coin Class
    var Coin = (function () {
        function Coin(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "coin");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 3;
            this.image.regY = this.height / 3;

            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        Coin.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y > this.stage.canvas.height + this.height) {
                this.reset();
            }
        };

        Coin.prototype.reset = function () {
            this.image.x = Math.floor(Math.random() * this.stage.canvas.width);
            this.image.y = -this.height;
        };

        Coin.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Coin;
    })();
    objects.Coin = Coin;
})(objects || (objects = {}));
//# sourceMappingURL=coin.js.map
