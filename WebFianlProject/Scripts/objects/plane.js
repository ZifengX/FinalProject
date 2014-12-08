/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // plane Class
    var Plane = (function (_super) {
        __extends(Plane, _super);
        function Plane(stage, game) {
            _super.call(this, "plane2");
            this.onStage = true;
            this.stage = stage;
            this.game = game;
            this.y = 600;
            game.addChild(this);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane.prototype.update = function () {
            this.x = this.stage.mouseX;
        };
        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this);
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map