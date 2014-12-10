/**
Game Name: Plane Crash
Name: Zifeng Xu, RenFa Feng
Last Modify by: Zifeng Xu, RenFa Feng
Date Last Modified: 2014, Dec.9th
Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
Rivision History: see https://github.com/ZifengX/FinalProject.git
https://github.com/BladeWork/FinalProject
**/
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        //image
        { id: "univers", src: "assets/images/univers.jpg" },
        //{ id: "logo", src: "assets/images/Logo.png" },
        //sounds
        { id: "engine", src: "assets/sounds/engine.mp3" },
        { id: "explosion", src: "assets/sounds/explosion.mp3" },
        { id: "coin", src: "assets/sounds/coin.mp3" },
        { id: "enemyengine", src: "assets/sounds/enemy.wav" },
        { id: "soundtrack", src: "assets/sounds/KalimbaShort.mp3" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [332, 123, 214, 68],
            [752, 98, 215, 75],
            [277, 167, 12, 12],
            [218, 133, 32, 32],
            [245, 167, 12, 18],
            [259, 167, 16, 16],
            [252, 133, 32, 32],
            [218, 167, 25, 25],
            [670, 104, 40, 40],
            [776, 2, 212, 73],
            [2, 2, 214, 190],
            [678, 2, 96, 94],
            [548, 114, 120, 78],
            [332, 2, 130, 119],
            [1214, 2, 203, 70],
            [990, 2, 222, 70],
            [1183, 74, 213, 70],
            [464, 2, 110, 110],
            [597, 24, 58, 56],
            [219, 3, 55, 61],
            [969, 77, 212, 71],
            [277, 181, 10, 10]
        ],
        "animations": {
            "again": [0],
            "back": [1],
            "bullet": [2],
            "bullet_down": [3],
            "bullet_up": [4],
            "bulletgreen": [5],
            "bulletred": [6],
            "circleredbullet": [7],
            "coin": [8],
            "easy": [9],
            "enemy1": [10],
            "enemy2": [11],
            "enemy3": [12],
            "explosion": [13],
            "hard": [14],
            "instructions": [15],
            "meduim": [16],
            "meteorolite1": [17],
            "meteorolite2": [18],
            "plane2": [19],
            "play": [20],
            "starbullet": [21]
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
