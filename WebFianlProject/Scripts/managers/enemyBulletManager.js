/// <reference path="../objects/enemy.ts" />
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
            var midBullet = new objects.Bullet_enemy(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.enemy.x;
            midBullet.y = this.enemy.y + 50;
            this.bullets.push(midBullet);
        };

        EnemyBulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var enemyBullet;

            for (var count = len - 1; count >= 0; count--) {
                enemyBullet = this.bullets[count];

                // move current bullet down stage
                enemyBullet.y += 4;

                // check to see if the bullet has left the stage
                if (enemyBullet.y < 0) {
                    this.destroyBullet(enemyBullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if (this.bulletCount++ % 108 == 0) {
                if (this.enemy.onStage == true) {
                    this.fire();
                }
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        EnemyBulletManager.prototype.destroyBullet = function (enemyBullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == enemyBullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(enemyBullet);
                }
            }
        };
        return EnemyBulletManager;
    })();
    managers.EnemyBulletManager = EnemyBulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=enemybulletmanager.js.map
