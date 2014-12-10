/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemybullet.ts" />
var managers;
(function (managers) {
    var EnemyBulletManager = (function () {
        function EnemyBulletManager(enemy, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.firing = false;
            this.game = game;
            this.enemy = enemy;
        }
        EnemyBulletManager.prototype.fire = function () {
            // create two bullets on either side of  plane
            var leftBullet = new objects.Bullet(this.game);
            var rightBullet = new objects.Bullet(this.game);
            this.game.addChild(leftBullet);
            leftBullet.x = this.enemy.x - 10;
            leftBullet.y = this.enemy.y + 10;
            this.bullets.push(leftBullet);
            this.game.addChild(rightBullet);
            rightBullet.x = this.enemy.x + 10;
            rightBullet.y = this.enemy.y + 10;
            this.bullets.push(rightBullet);
            // Play Bullet Sound
            createjs.Sound.play("bullet");
        }; // end fire
        EnemyBulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;
            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];
                // move current bullet down stage
                bullet.y += 25;
                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                }
            }
            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCount % 10 == 0)) {
                if (this.enemy.onStage == true) {
                    this.fire();
                }
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        }; // end update
        EnemyBulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        }; // end destroyBullet
        return EnemyBulletManager;
    })();
    managers.EnemyBulletManager = EnemyBulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=enemybulletmanager.js.map