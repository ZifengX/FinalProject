/**
     Game Name: Star Wars
    Name: Zifeng Xu
    Last Modify by: Zifeng Xu
    Date Last Modified: 2014, Dec.12th
    Description: It is about a war happened inthe universe, you are a pilot fighting with
                 enemies to save the earth. Move your mouse left or right,
                 Click left button to fire, Earn coins 100pt/one, Watch out there is 
                  a 'BIG ONE'.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                      
**/

/// <reference path="../managers/asset.ts" />
module objects {
    // plane Class
    export class Plane extends objects.GameObject {
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        onStage: boolean = true;
        planeName: string = "";
        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("plane2");
            this.stage = stage;
            this.game = game;
            this.y = 580;

            game.addChild(this);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            this.x = this.stage.mouseX;
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this);
        }
    }
} 