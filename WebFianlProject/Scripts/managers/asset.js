/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "univers", src: "assets/images/univers.jpg" },
        { id: "logo", src: "assets/images/Logo.png" },
        { id: "engine", src: "assets/sounds/engine.mp3" },
        { id: "bom", src: "assets/sounds/bom.wav" },
        { id: "rasb", src: "assets/sounds/rasb.wav" },
        { id: "enemyengine", src: "assets/sounds/engine.wav" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [260, 194, 214, 68],
            [442, 264, 25, 25],
            [550, 484, 12, 12],
            [2, 454, 32, 32],
            [606, 164, 12, 18],
            [638, 2, 16, 16],
            [564, 294, 32, 32],
            [476, 164, 128, 128],
            [2, 262, 214, 190],
            [338, 409, 96, 94],
            [442, 294, 120, 78],
            [218, 409, 118, 101],
            [218, 264, 222, 70],
            [2, 2, 256, 258],
            [476, 2, 160, 160],
            [550, 374, 112, 108],
            [436, 374, 112, 129],
            [260, 2, 214, 190],
            [218, 336, 212, 71],
            [2, 488, 10, 10]
        ],
        "animations": {
            "again": [0],
            "bullet-circle-red": [1],
            "bullet": [2],
            "bullet_down": [3],
            "bullet_up": [4],
            "bulletgreen": [5],
            "bulletred": [6],
            "coin": [7],
            "enemy1": [8],
            "enemy2": [9],
            "enemy3": [10],
            "explosion": [11],
            "instructions": [12],
            "meteorolite1": [13],
            "meteorolite2": [14],
            "plane1": [15],
            "plane2": [16],
            "plane3": [17],
            "play": [18],
            "red-star-bullet": [19]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map