/**
Game Name: Star Wars
Name: Zifeng Xu, RenFa Feng
Last Modify by: Zifeng Xu, RenFa Feng
Date Last Modified: 2014, Dec.12th
Description: It is about a war happened inthe universe, you are a pilot fighting with
enemies to save the earth. Move your mouse left or right,
Click left button to fire, Earn coins 100pt/one, Watch out there is
a 'BIG ONE'.
Rivision History: see https://github.com/ZifengX/FinalProject.git
https://github.com/BladeWork/FinalProject
**/
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/bossbullet.ts" />
var managers;
(function (managers) {
    var BossBulletManager = (function () {
        function BossBulletManager(boss, game) {
            this.bullets = [];
            this.bulletCount = 0;
            this.game = game;
            this.boss = boss;
        }
        BossBulletManager.prototype.fire = function () {
            // create two bullets on either side of  planes
            var midBullet = new objects.Bullet_enemy(this.game);
            var leftBullet = new objects.Bullet_enemy(this.game);
            var rightBullet = new objects.Bullet_enemy(this.game);

            this.game.addChild(midBullet);
            midBullet.x = this.boss.x;
            midBullet.y = this.boss.y + 50;
            this.bullets.push(midBullet);

            this.game.addChild(leftBullet);
            leftBullet.x = this.boss.x - 50;
            leftBullet.y = this.boss.y + 90;
            this.bullets.push(leftBullet);

            this.game.addChild(rightBullet);
            rightBullet.x = this.boss.x + 50;
            rightBullet.y = this.boss.y + 90;
            this.bullets.push(rightBullet);
        };

        BossBulletManager.prototype.update = function () {
            var len = this.bullets.length;
            var bossBullet;

            var threeBulletTimes = 1;
            var signal = 0;
            for (var count = 0; count < len; count++) {
                bossBullet = this.bullets[count];
                if (threeBulletTimes == 1) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                } else if (threeBulletTimes == 2) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                    bossBullet.x -= 10;
                } else if (threeBulletTimes == 3) {
                    // move current bullet down stage
                    bossBullet.y += 5;
                    bossBullet.x += 10;
                    threeBulletTimes = 0;
                }

                // check to see if the bullet has left the stage
                if (bossBullet.y < 0) {
                    this.destroyBullet(bossBullet);
                }
                threeBulletTimes++;
            }

            // fire bullet if mouse button is clicked or game container is tapped
            if (this.bulletCount++ % 99 == 0) {
                if (this.boss.onStage == true) {
                    this.fire();
                }
            }

            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        };

        BossBulletManager.prototype.destroyBullet = function (bossBullet) {
            var len = this.bullets.length;

            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bossBullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bossBullet);
                }
            }
        };
        return BossBulletManager;
    })();
    managers.BossBulletManager = BossBulletManager;
})(managers || (managers = {}));
//# sourceMappingURL=bossbulletmanager.js.map
