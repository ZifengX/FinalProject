/**
    Game Name: Plane Crash
    Name: Zifeng Xu, RenFa Feng
    Last Modify by: Zifeng Xu, RenFa Feng
    Date Last Modified: 2014, Dec.9th
    Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                          https://github.com/BladeWork/FinalProject
**/
/// <reference path="../managers/asset.ts" />
module objects {
    // enemy Class
    export class Boss extends objects.GameObject {
        game: createjs.Container;
        dy: number;
        dx: number;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        private enginePlay: boolean;
        hp: number = 50;
        constructor(game: createjs.Container) {
            super("enemy1");
            this.game = game;
            this.dy = 5;
            this.dx = 5;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }

        update() {
            if (this.y < 195)
                this.y += this.dy;
            if (this.x < 50)
                this.x += this.dx;
            if (this.x > 700)
                this.x -= this.dx;
            this.checkEngine();
        }

        reset() {
            this.enginePlay = false;
            // Reset the enemy image location
            if (this.hp == 0) {
                stage.removeChild(game);
                createjs.Sound.stop();
                game.removeAllChildren();
                game.removeAllEventListeners();
                currentState = constants.INSTRUCTIONS_STATE;
                changeState(currentState);
            }
        }

        checkEngine() {
            if ((this.enginePlay == true) && (this.engineSound.playState != "playSucceeded")) {
                this.engineSound.play();
            }
            else if (this.enginePlay == false) {
                this.engineSound.stop();
            }

        }

    }
} 