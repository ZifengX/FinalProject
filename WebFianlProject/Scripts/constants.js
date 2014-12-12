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
var constants;
(function (constants) {
    // Stage Size Constants
    constants.GAME_WIDTH = 750;
    constants.GAME_HEIGHT = 650;

    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.GAME_WIN_STATE = 6;
    constants.INSTRUCTIONS_STATE = 3;
    constants.PLAY_HARD_STATE = 4;
    constants.PLAY_IMPOSSIBLE_STATE = 5;
    constants.Hard_to_IMPOSSIBLE = 7;

    // Game Constants
    constants.METEOROLITE_NUM = 2;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
    constants.ENEMY_NUM = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
