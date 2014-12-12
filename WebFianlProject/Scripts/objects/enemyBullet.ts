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

// Bullet Class
module objects {
    export class Bullet_enemy extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("bullet_up");
            this.game = game;
            this.game.addChild(this);
        }

        destroy() {
            game.removeChild(this);
        }
    }
} 