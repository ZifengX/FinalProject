/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemybullet.ts" />
var managers;
(function (managers) {
    var EnemyBulletManager = (function () {
        function EnemyBulletManager(enemy, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.game = game;
            this.enemy = enemy;
        }
        EnemyBulletManager.prototype.fire = function () {
            // create two bullets on either side of  planes
            var midBullet = new objects.Bullet(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.enemy.x;
            midBullet.y = this.enemy.y + 50;
            this.bullets.push(midBullet);

            // Play Bullet Sound
            createjs.Sound.play("bullet");
        };

        EnemyBulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];

                // move current bullet down stage
                bullet.y += 5;

                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if (this.bulletCount++ % 98 == 0) {
                if (this.enemy.onStage == true) {
                    this.fire();
                }
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        EnemyBulletManager.prototype.destroyBullet = function (bullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        };
        return EnemyBulletManager;
    })();
    managers.EnemyBulletManager = EnemyBulletManager;
})(managers || (managers = {}));
