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
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(plane, coin, meteorolites, scoreboard) {
            this.meteorolites = [];
            this.plane = plane;
            this.coin = coin;
            this.meteorolites = meteorolites;
            this.scoreboard = scoreboard;
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
        Collision.prototype.carAndMete = function (meteorolite) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = meteorolite.image.x;
            p2.y = meteorolite.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (meteorolite.height / 2))) {
                createjs.Sound.play("bom");
                this.scoreboard.lives -= 1;
                meteorolite.reset();
            }
        };
        // check collision between plane and island
        Collision.prototype.carAndCoin = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (this.coin.height / 2))) {
                createjs.Sound.play("rasb");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
                this.carAndMete(this.meteorolites[count]);
            }
            this.carAndCoin();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map