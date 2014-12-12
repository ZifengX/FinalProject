/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/bossbullet.ts" />

module managers {
    export class BossBulletManager {
        game: createjs.Container;
        boss: objects.Boss;

        bullets = [];
        bulletCount: number = 0;
        constructor(boss: objects.Boss, game: createjs.Container) {
            this.game = game;
            this.boss = boss;
        }

        fire() {
            // create two bullets on either side of  planes
            var midBullet: objects.bossBullet = new objects.bossBullet(this.game);
            var leftBullet: objects.bossBullet = new objects.bossBullet(this.game);
            var rightBullet: objects.bossBullet = new objects.bossBullet(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.boss.x;
            midBullet.y = this.boss.y + 90;
            this.bullets.push(midBullet);

            this.game.addChild(leftBullet);
            leftBullet.x = this.boss.x - 50;
            leftBullet.y = this.boss.y + 80;
            this.bullets.push(leftBullet);

            this.game.addChild(rightBullet);
            rightBullet.x = this.boss.x + 50;
            rightBullet.y = this.boss.y + 80;
            this.bullets.push(rightBullet);

        } // end fire

        update() {
            var len: number = this.bullets.length;
            var bossBullet: objects.Bullet_enemy;

            var threeBulletTimes: number = 1;//1 is middle bullet, 2 is left, 3 is right
            var signal: number = 0;
            for (var count = 0; count < len; count++) {
                bossBullet = this.bullets[count];
                if (threeBulletTimes == 1) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                } else if (threeBulletTimes == 2) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                    bossBullet.x -= 4;
                } else if (threeBulletTimes == 3) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                    bossBullet.x += 4;
                    threeBulletTimes = 0;
                }
                // check to see if the bullet has left the stage
                if (bossBullet.y < 0) {
                    this.destroyBullet(bossBullet);
                }
                threeBulletTimes++;
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if (this.bulletCount++ % 79 == 0) {
                if (this.boss.onStage == true) {
                    this.fire();
                }
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        } // end update

        destroyBullet(bossBullet: objects.bossBullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bossBullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bossBullet);
                }
            }
        } // end destroyBullet
    }
} 