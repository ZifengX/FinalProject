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
// Bullet Class
var objects;
(function (objects) {
    var Bullet_enemy = (function (_super) {
        __extends(Bullet_enemy, _super);
        function Bullet_enemy(game) {
            _super.call(this, "bullet_up");
            this.game = game;
            this.game.addChild(this);
        }
        Bullet_enemy.prototype.destroy = function () {
            game.removeChild(this);
        };
        return Bullet_enemy;
    })(objects.GameObject);
    objects.Bullet_enemy = Bullet_enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemybullet.js.map
