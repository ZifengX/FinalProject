/**
Game Name: Star Wars
Name: Zifeng Xu
Last Modify by: Zifeng Xu
Date Last Modified: 2014, Dec.12th
Description: It is about a war happened inthe universe, you are a pilot fighting with
enemies to save the earth. Move your mouse left or right,
Click left button to fire, Earn coins 100pt/one, Watch out there is
a 'BIG ONE'.
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
            this.planeName = "";
            this.stage = stage;
            this.game = game;
            this.y = 580;

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
