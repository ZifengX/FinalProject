/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/SideScroller-Car
**/
/// <reference path="../objects/bomb.ts" />
/// <reference path="../objects/rasberry.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(car, rasberry, bombs, scoreboard) {
            this.bombs = [];
            this.car = car;
            this.rasberry = rasberry;
            this.bombs = bombs;
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
        Collision.prototype.carAndBomb = function (bomb) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = bomb.image.x;
            p2.y = bomb.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (bomb.height / 2))) {
                createjs.Sound.play("bom");
                this.scoreboard.lives -= 1;
                bomb.reset();
            }
        };
        // check collision between plane and island
        Collision.prototype.carAndRasb = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = this.rasberry.image.x;
            p2.y = this.rasberry.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (this.rasberry.height / 2))) {
                createjs.Sound.play("rasb");
                this.scoreboard.score += 100;
                this.rasberry.reset();
            }
        };
        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.BOMB_NUM; count++) {
                this.carAndBomb(this.bombs[count]);
            }
            this.carAndRasb();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map