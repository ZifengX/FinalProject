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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Bullet Class
var objects;
(function (objects) {
    var bossBullet = (function (_super) {
        __extends(bossBullet, _super);
        function bossBullet(game) {
            _super.call(this, "bulletgreen");
            this.game = game;
            this.game.addChild(this);
        }
        bossBullet.prototype.destroy = function () {
            game.removeChild(this);
        };
        return bossBullet;
    })(objects.GameObject);
    objects.bossBullet = bossBullet;
})(objects || (objects = {}));
//# sourceMappingURL=bossBullet.js.map
