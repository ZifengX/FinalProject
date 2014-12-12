/**
Game Name: Star Wars
Name: Zifeng Xu
Last Modify by: Zifeng
Date Last Modified: 2014, December 9th
Description: It is about a war happened inthe universe, you are a pilot fighting with
enemies to save the earth. Move your mouse left or right,
Click left button to fire, Earn coins 100pt/one, Watch out there is a 'BIG ONE'.
Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Land Class
    var Univers = (function () {
        //car contructor
        function Univers(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("univers"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 3;

            game.addChild(this.image);
        }
        Univers.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };

        Univers.prototype.reset = function () {
            this.image.y = -1850;
        };

        Univers.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Univers;
    })();
    objects.Univers = Univers;
})(objects || (objects = {}));
