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
            this.dy = 5;
            game.addChild(this.image);
        }
        Univers.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };
        Univers.prototype.reset = function () {
            this.image.y = -960;
        };
        Univers.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Univers;
    })();
    objects.Univers = Univers;
})(objects || (objects = {}));
//# sourceMappingURL=univers.js.map