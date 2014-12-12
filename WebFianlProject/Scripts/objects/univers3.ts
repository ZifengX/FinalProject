/**
    Game Name: Star Wars
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, December 9th
    Description: It is about a war happened inthe universe, you are a pilot fighting with
                 enemies to save the earth. Move your mouse left or right,
                 Click left button to fire, Earn coins 100pt/one, Watch out there is 
                  a 'BIG ONE'.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/

/// <reference path="../managers/asset.ts" />
module objects {
    // Land Class
    export class Univers3 {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        //car contructor
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("univers3"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 3;

            game.addChild(this.image);
        }

        update() {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.y = -630;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}  