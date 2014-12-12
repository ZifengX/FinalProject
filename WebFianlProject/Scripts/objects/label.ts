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

/// <reference path="../constants.ts" />
module objects {
    export class Label extends createjs.Text {
        constructor(x: number, y: number, labelText: string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
}  