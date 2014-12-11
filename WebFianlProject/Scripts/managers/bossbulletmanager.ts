/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemybullet.ts" />

module managers {
    export class BossBulletManager {
        game: createjs.Container;
        enemy: objects.Enemy;

        bullets = [];
        bulletCount: number = 0;
        constructor(enemy: objects.Enemy, game: createjs.Container) {
            this.game = game;
            this.enemy = enemy;
        }

        fire() {
            // create two bullets on either side of  planes
            var midBullet: objects.Bullet_enemy = new objects.Bullet_enemy(this.game);
            var leftBullet: objects.Bullet_enemy = new objects.Bullet_enemy(this.game);
            var rightBullet: objects.Bullet_enemy = new objects.Bullet_enemy(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.enemy.x;
            midBullet.y = this.enemy.y + 50;
            this.bullets.push(midBullet);

            this.game.addChild(leftBullet);
            leftBullet.x = this.enemy.x - 10;
            leftBullet.y = this.enemy.y + 50;
            this.bullets.push(leftBullet);

            this.game.addChild(rightBullet);
            rightBullet.x = this.enemy.x + 10;
            rightBullet.y = this.enemy.y + 50;
            this.bullets.push(rightBullet);

        } // end fire

        update() {
            var len: number = this.bullets.length;
            var enemyBullet: objects.Bullet_enemy;

            for (var count = len - 1; count >= 0; count--) {
                enemyBullet = this.bullets[count];
                // move current bullet down stage
                enemyBullet.y += 5;
                // check to see if the bullet has left the stage
                if (enemyBullet.y < 0) {
                    this.destroyBullet(enemyBullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if (this.bulletCount++ % 99 == 0) {
                if (this.enemy.onStage == true) {
                    this.fire();
                }
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        } // end update

        destroyBullet(enemyBullet: objects.Bullet_enemy) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == enemyBullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(enemyBullet);
                }
            }
        } // end destroyBullet
    }
} 