/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
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
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
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