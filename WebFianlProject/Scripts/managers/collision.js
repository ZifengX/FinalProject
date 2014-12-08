/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
/// <reference path="../objects/meteorolite.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, coin, meteorolites, scoreboard, game, enemies, bullets) {
            this.meteorolites = [];
            this.enemies = [];
            this.bullets = [];
            this.plane = plane;
            this.coin = coin;
            this.meteorolites = meteorolites;
            this.enemies = enemies;
            this.bullets = bullets;
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
                createjs.Sound.play("bom");
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
                createjs.Sound.play("rasb");
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
                createjs.Sound.play("bom");
                // show explosion animation
                // var explosion = new objects.Explosion(game);
                //explosion.x = this.plane.x;
                //explosion.y = this.plane.y;
                // explosion.on("animationend", function (e) { explosion.remove(); });
                //this.plane.gotoAndPlay("flickerPlane");
                this.plane.onStage = false;
                setTimeout(function (e) {
                    this.plane.gotoAndPlay("plane2");
                    this.plane.onStage = true;
                }, 2000);
                this.scoreboard.lives -= 1;
                enemy.reset();
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
                createjs.Sound.play("bom");
                // show explosion animation
                //var explosion = new objects.Explosion(game);
                //explosion.x = enemy.x;
                //explosion.y = enemy.y;
                //explosion.on("animationend", function (e) { explosion.remove(); });
                this.scoreboard.score += 200;
                enemy.reset();
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
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map