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

// Bullet Class
module objects {
    export class Bullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("circleredbullet");
            this.game = game;
            this.game.addChild(this);
        }
    }
} 