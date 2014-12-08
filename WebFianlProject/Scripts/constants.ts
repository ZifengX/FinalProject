/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/

module constants {
    // Stage Size Constants
    export var GAME_WIDTH: number = 550;
    export var GAME_HEIGHT: number = 650;

    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;
    export var LEVEL2_STATE: number = 4;
    export var LEVEL3_STATE: number = 5;

    // Game Constants
    export var METEOROLITE_NUM: number = 3;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLANE_LIVES = 3;
    export var ENEMY_NUM: number = 1;


} 