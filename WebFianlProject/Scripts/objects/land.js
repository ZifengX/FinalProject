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
    // Land Class
    var Land = (function () {
        //car contructor
        function Land(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("land"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            this.dy = 5;
            game.addChild(this.image);
        }
        Land.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };
        Land.prototype.reset = function () {
            this.image.y = -960;
        };
        Land.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Land;
    })();
    objects.Land = Land;
})(objects || (objects = {}));
//# sourceMappingURL=land.js.map