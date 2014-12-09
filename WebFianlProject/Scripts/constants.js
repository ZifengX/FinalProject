/**
Game Name: Plane Crash
Name: Zifeng Xu, RenFa Feng
Last Modify by: Zifeng Xu, RenFa Feng
Date Last Modified: 2014, Dec.9th
Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
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
    constants.INSTRUCTIONS_STATE = 3;
    constants.PLAY_HARD_STATE = 4;
    constants.PLAY_IMPOSSIBLE_STATE = 5;

    // Game Constants
    constants.METEOROLITE_NUM = 3;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
    constants.ENEMY_NUM = 3;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map
