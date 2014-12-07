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
    // Car Class
    var Car = (function () {
        function Car(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "car");
            this.image.y = 620;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Car.prototype.update = function () {
            this.image.x = this.stage.mouseX;
        };
        Car.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Car;
    })();
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map