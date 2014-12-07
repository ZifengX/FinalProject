/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/SideScroller-Car
**/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Bomb class
    var Bomb = (function () {
        function Bomb(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "bomb");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Bomb.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            if (this.image.x < -(this.stage.canvas.height + this.height)) {
                this.reset();
            }
        };
        Bomb.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -4) + Math.floor(Math.random() * 4);
            this.image.x = this.stage.canvas.width;
        };
        Bomb.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Bomb;
    })();
    objects.Bomb = Bomb;
})(objects || (objects = {}));
//# sourceMappingURL=bomb.js.map