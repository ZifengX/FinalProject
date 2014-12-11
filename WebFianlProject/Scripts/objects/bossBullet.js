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
