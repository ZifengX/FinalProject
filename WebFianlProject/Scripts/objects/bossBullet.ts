// Bullet Class
module objects {
    export class bossBullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("bulletgreen");
            this.game = game;
            this.game.addChild(this);
        }

        destroy() {
            game.removeChild(this);
        }
    }
} 