/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/bullet.ts" />

module managers {
    export class BulletManager {
        game: createjs.Container;
        plane: objects.Plane;
        enemyPlane: objects.Enemy;
        bullets = [];
        bulletCount: number = 0;
        firing: boolean = false;
        constructor(plane: objects.Plane, game: createjs.Container) {
            this.game = game;
            this.plane = plane;
        }
        
        fire() {
            // create two bullets on either side of  plane
            var leftBullet: objects.Bullet = new objects.Bullet(this.game);
            var rightBullet: objects.Bullet = new objects.Bullet(this.game);

            this.game.addChild(leftBullet);
            leftBullet.x = this.plane.x - 10;
            leftBullet.y = 560;
            this.bullets.push(leftBullet);

            this.game.addChild(rightBullet);
            rightBullet.x = this.plane.x + 10;
            rightBullet.y = 560;
            this.bullets.push(rightBullet);

            // Play Bullet Sound
            createjs.Sound.play("bullet");
        } // end fire

        fireByEnemy(enemyPlane: objects.Enemy) {
            // create two bullets on either side of  plane
            var midBullet: objects.Bullet = new objects.Bullet(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.enemyPlane.x;
            midBullet.y = enemyPlane.y - 5;
            this.bullets.push(midBullet);

            this.game.addChild(midBullet);

            // Play Bullet Sound
            createjs.Sound.play("bullet");
        } // end fire

        update() {
            var len: number = this.bullets.length;
            var bullet: objects.Bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];
                // move current bullet up stage
                bullet.y -= 25;
                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                }
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCount % 10 == 0)) {
                if (this.plane.onStage == true) {
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