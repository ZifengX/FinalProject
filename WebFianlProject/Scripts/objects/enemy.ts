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
/// <reference path="../managers/asset.ts" />
module objects {
    // enemy Class
    export class Enemy extends objects.GameObject {
        game: createjs.Container;
        dy: number;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        private enginePlay: boolean;
        constructor(game: createjs.Container) {
            super("enemy2");
            this.game = game;
            this.dy = 2;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }

        update() {
            this.y += this.dy;
            if (this.y > -stage.canvas.height) {
                this.enginePlay = true;
            }

            if (this.y > stage.canvas.height * 2) {
                this.reset();
            }
            this.checkEngine();
        }

        reset() {
            this.engineSound.stop();
            this.enginePlay = false;
            // Reset the enemy image location
            var positionX = Math.floor(Math.random() * stage.canvas.width);
           // if (positionX > 50 && positionX < 700)
            if (positionX > 100 && positionX < 650)
                this.x = positionX;
            this.y = -stage.canvas.height * 1.2;
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