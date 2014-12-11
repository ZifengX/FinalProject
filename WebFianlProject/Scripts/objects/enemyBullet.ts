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