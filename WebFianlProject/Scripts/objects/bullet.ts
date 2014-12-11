// Bullet Class
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