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

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private plane: objects.Plane;
        private coin: objects.Coin;
        private meteorolites = [];
        private scoreboard: objects.Scoreboard;

        constructor(plane: objects.Plane, coin: objects.Coin, meteorolites, scoreboard: objects.Scoreboard) {
            this.plane = plane;
            this.coin = coin;
            this.meteorolites = meteorolites;
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
        private carAndMete(meteorolite: objects.Meteorolite) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = meteorolite.image.x;
            p2.y = meteorolite.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (meteorolite.height / 2))) {
                createjs.Sound.play("bom");
                this.scoreboard.lives -= 1;
                meteorolite.reset();
            }
        }

        // check collision between plane and island
        private carAndCoin() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.plane.image.x;
            p1.y = this.plane.image.y;
            p2.x = this.coin.image.x;
            p2.y = this.coin.image.y;
            if (this.distance(p1, p2) < ((this.plane.height / 2) + (this.coin.height / 2))) {
                createjs.Sound.play("rasb");
                this.scoreboard.score += 100;
                this.coin.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.METEOROLITE_NUM; count++) {
                this.carAndMete(this.meteorolites[count]);
            }
            this.carAndCoin();
        }
    }
}  