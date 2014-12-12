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
    // Boss Class
    export class Boss extends objects.GameObject {
        game: createjs.Container;
        dy: number;
        dx: number;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        private enginePlay: boolean;
        hp: number = 500;
        leftOrRight: boolean = true; //ture:left  false:right
        constructor(game: createjs.Container) {
            super("enemy1");
            this.game = game;
            this.dy = 2;
            this.dx = 2;
            this.enginePlay = false;
            this.engineSound = createjs.Sound.play("enemyEngine");
            this.reset();
            this.game.addChild(this);
        }

        update() {
            if (this.y < 120)
                this.y += this.dy;

            if (this.leftOrRight) {
                this.x -= this.dx;
                if (this.x <= 50) {
                    this.leftOrRight = false;
                }
            } else if (!this.leftOrRight) {
                this.x += this.dx;
                if (this.x >= 700) {
                    this.leftOrRight = true;
                }
            }

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
                currentState = constants.GAME_WIN_STATE;
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