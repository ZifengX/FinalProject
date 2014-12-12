/**
     Game Name: Star Wars
    Name: Zifeng Xu, RenFa Feng
    Last Modify by: Zifeng Xu, RenFa Feng
    Date Last Modified: 2014, Dec.9th
    Description: It is about a war happened inthe universe, you are a pilot fighting with
                 enemies to save the earth. Move your mouse left or right,
                 Click left button to fire, Earn coins 100pt/one, Watch out there is
                  a 'BIG ONE'.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                          https://github.com/BladeWork/FinalProject
**/
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/enemybullet.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, coin, meteorolites, scoreboard, game, enemies, bullets, enemyBullets, bosses, bossBullets) {
            this.meteorolites = [];
            this.enemies = [];
            this.bullets = [];
            this.bosses = [];
            this.enemyBullets = [];
            this.bossBullets = [];
            this.plane = plane;
            this.coin = coin;
            this.meteorolites = meteorolites;
            this.enemies = enemies;
            this.bosses = bosses;
            this.bullets = bullets;
            this.enemyBullets = enemyBullets;
            this.bossBullets = bossBullets;
            this.scoreboard = scoreboard;
            this.game = game;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;
            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;
            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;
            result = Math.sqrt(xPoints + yPoints);
            return result;
        };
        // check collision between plane and any cloud object
        Collision.prototype.planeAndMete = function (meteorolite) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = meteorolite.image.x;
            p2.y = meteorolite.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (meteorolite.height / 2))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("explosion");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 800);
                this.scoreboard.lives -= 1;
                meteorolite.reset();
            }
        };
        // check collision between plane and coin
        Collision.prototype.planeAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (this.coin.height / 2))) {
                createjs.Sound.play("coin");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        };
        // check collision between plane and enemy objects
        Collision.prototype.planeAndEnemy = function (enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("explosion");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 800);
                this.scoreboard.lives -= 1;
                enemy.reset();
            }
        };
        // check collision between plane and boss objects
        Collision.prototype.planeAndBoss = function (boss) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.x;
            p1.y = this.plane.y;
            p2.x = boss.x;
            p2.y = boss.y;
            if (this.distance(p1, p2) < ((this.plane.height * 0.5) + (boss.height * 0.5))) {
                createjs.Sound.play("explosion");
                // show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("explosion");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 800);
                this.scoreboard.lives -= 1;
                boss.reset();
            }
        };
        // check collision between bullet and any enemy object
        Collision.prototype.bulletAndEnemy = function (bullet, enemy) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = enemy.x;
            p2.y = enemy.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (enemy.height * 0.5))) {
                createjs.Sound.play("explosion");
                //show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = enemy.x;
                explosion.y = enemy.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.enemy.gotoAndPlay("explosion");
                this.enemy.onStage = false;
                setTimeout(function (e) {
                    this.enemy.gotoAndPlay(null);
                    this.enemy.onStage = true;
                }, 800);
                this.scoreboard.score += 200;
                enemy.reset();
            }
        };
        // check collision between bullet and any boss object
        Collision.prototype.bulletAndBoss = function (bullet, boss) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bullet.x;
            p1.y = bullet.y;
            p2.x = boss.x;
            p2.y = boss.y;
            if (this.distance(p1, p2) < ((bullet.height * 0.5) + (boss.height * 0.5))) {
                createjs.Sound.play("explosion");
                //show explosion animation
                //var explosion = new objects.Explosion(game);
                // explosion.x = boss.x;
                // explosion.y = boss.y;
                // explosion.on("animationend", function (e) { explosion.remove(); });
                // setTimeout(function (e) { }, 200);
                // this.boss.gotoAndPlay("explosion");
                // this.boss.onStage = false;
                // setTimeout(function (e) {
                //    this.boss.gotoAndPlay(null);
                //    this.boss.onStage = true;
                // }, 800);
                boss.hp--;
                this.scoreboard.score += 300;
                if (boss.hp == 0) {
                    this.scoreboard.score += 10000;
                    boss.reset();
                }
            }
        };
        // check collision between plane and enemy bullet object
        Collision.prototype.planeAndEnemyBullet = function (enemyBullet) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = enemyBullet.x;
            p1.y = enemyBullet.y;
            p2.x = this.plane.x;
            p2.y = this.plane.y;
            if (this.distance(p1, p2) < ((enemyBullet.height * 0.5) + (this.plane.height * 0.5))) {
                createjs.Sound.play("explosion");
                //show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("explosion");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 800);
                this.scoreboard.lives -= 1;
            }
        };
        // check collision between plane and bossbullet object
        Collision.prototype.planeAndBossBullet = function (bossBullet) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = bossBullet.x;
            p1.y = bossBullet.y;
            p2.x = this.plane.x;
            p2.y = this.plane.y;
            if (this.distance(p1, p2) < ((bossBullet.height * 0.5) + (this.plane.height * 0.5))) {
                createjs.Sound.play("explosion");
                //show explosion animation
                var explosion = new objects.Explosion(game);
                explosion.x = this.plane.x;
                explosion.y = this.plane.y;
                explosion.on("animationend", function (e) {
                    explosion.remove();
                });
                this.plane.gotoAndPlay("explosion");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 800);
                this.scoreboard.lives -= 1;
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            if (plane.onStage == true) {
                for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
                    this.planeAndMete(this.meteorolites[count]);
                }
                this.planeAndCoin();
                if (typeof this.enemies != "undefined") {
                    this.planeAndEnemy(this.enemies[0]);
                    if (bulletManager.firing == true) {
                        var len = this.bullets.length;
                        for (var count = 0; count < len; count++) {
                            this.bulletAndEnemy(this.bullets[count], this.enemies[0]);
                        }
                    }
                    var len = this.enemyBullets.length;
                    for (var count = 0; count < len; count++) {
                        this.planeAndEnemyBullet(this.enemyBullets[count]);
                    }
                } //end of if enemies
                if (typeof this.bosses != "undefined") {
                    this.planeAndBoss(this.bosses[0]);
                    if (bulletManager.firing == true) {
                        var len = this.bullets.length;
                        for (var count = 0; count < len; count++) {
                            this.bulletAndBoss(this.bullets[count], this.bosses[0]);
                        }
                    } //end of if bulletManager
                    var len = this.bossBullets.length;
                    for (var count = 0; count < len; count++) {
                        this.planeAndBossBullet(this.bossBullets[count]);
                    }
                } //end of if bosses
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map