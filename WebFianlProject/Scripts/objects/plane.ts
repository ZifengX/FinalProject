/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
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

        constructor(stage: createjs.Stage, game: createjs.Container) {
            super("plane2");
            this.stage = stage;
            this.game = game;           
            this.y = 600;
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