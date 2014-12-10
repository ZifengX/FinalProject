/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/enemybullet.ts" />

module managers {
    export class EnemyBulletManager {
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
            var midBullet: objects.Bullet = new objects.Bullet(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.enemy.x;
            midBullet.y = this.enemy.y + 50;
            this.bullets.push(midBullet);

            // Play Bullet Sound
            createjs.Sound.play("bullet");
        } // end fire

        update() {
            var len: number = this.bullets.length;
            var bullet: objects.Bullet;

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
        } // end update

        destroyBullet(bullet: objects.Bullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        } // end destroyBullet
    }
} 