/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/SideScroller-Car
**/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;

    // Game Constants
    export var BOMB_NUM: number = 4;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var CAR_LIVES = 3;
} 