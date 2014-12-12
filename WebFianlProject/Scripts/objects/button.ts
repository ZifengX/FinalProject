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

/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    export class Button extends createjs.Sprite {
        constructor(x: number, y: number, buttonIDString: string) {
            super(managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }

        setButtonListeners() {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        }

        onButtonOver() {
            this.alpha = 0.8;
        }

        onButtonOut() {
            this.alpha = 1;
        }
    }
} 