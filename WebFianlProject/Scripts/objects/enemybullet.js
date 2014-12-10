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
            _super.call(this, "bullet_down");
            this.game = game;
            this.game.addChild(this);
        }
        return Bullet_enemy;
    })(objects.GameObject);
    objects.Bullet_enemy = Bullet_enemy;
})(objects || (objects = {}));
