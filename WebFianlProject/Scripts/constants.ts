/**
     Game Name: Star Wars
    Name: Zifeng Xu, RenFa Feng
    Last Modify by: Zifeng Xu, RenFa Feng
    Date Last Modified: 2014, Dec.9th
    Description: It is about a war happened inthe universe, you are a pilot fighting with
                 enemies to save the earth. Move your mouse left or right,
                 Click left button to fire, Earn coins 100pt/one, Watch out there is 
                  a 'BIG ONE'.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                          https://github.com/BladeWork/FinalProject
**/

module constants {
    // Stage Size Constants
    export var GAME_WIDTH: number = 750;
    export var GAME_HEIGHT: number = 650;

    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var GAME_WIN_STATE: number = 6;
    export var INSTRUCTIONS_STATE: number = 3;
    export var PLAY_HARD_STATE: number = 4;
    export var PLAY_IMPOSSIBLE_STATE: number = 5;
    export var Hard_to_IMPOSSIBLE: number = 7;

    // Game Constants
    export var METEOROLITE_NUM: number = 2;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLANE_LIVES = 3;
    export var ENEMY_NUM: number = 3;


} 