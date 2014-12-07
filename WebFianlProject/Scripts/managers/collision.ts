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

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private car: objects.Car;
        private rasberry: objects.Rasberry;
        private bombs = [];
        private scoreboard: objects.Scoreboard;

        constructor(car: objects.Car, rasberry: objects.Rasberry, bombs, scoreboard: objects.Scoreboard) {
            this.car = car;
            this.rasberry = rasberry;
            this.bombs = bombs;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private carAndBomb(bomb: objects.Bomb) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = bomb.image.x;
            p2.y = bomb.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (bomb.height / 2))) {
                createjs.Sound.play("bom");
                this.scoreboard.lives -= 1;
                bomb.reset();
            }
        }

        // check collision between plane and island
        private carAndRasb() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.car.image.x;
            p1.y = this.car.image.y;
            p2.x = this.rasberry.image.x;
            p2.y = this.rasberry.image.y;
            if (this.distance(p1, p2) < ((this.car.height / 2) + (this.rasberry.height / 2))) {
                createjs.Sound.play("rasb");
                this.scoreboard.score += 100;
                this.rasberry.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.BOMB_NUM; count++) {
                this.carAndBomb(this.bombs[count]);
            }
            this.carAndRasb();
        }
    }
}  