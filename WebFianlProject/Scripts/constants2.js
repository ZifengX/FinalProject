/**
    Game Name: Plane Crash
    Name: Zifeng Xu, RenFa Feng
    Last Modify by: Zifeng Xu, RenFa Feng
    Date Last Modified: 2014, Dec.9th
    Description: This is a plan crash game.Hit the enemy to earn 10 points.Be Hit will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
                          https://github.com/BladeWork/FinalProject
**/
var constants2;
(function (constants2) {
    // Stage Size Constants
    constants2.GAME_WIDTH = 750;
    constants2.GAME_HEIGHT = 650;
    // State Machine Constants
    constants2.MENU_STATE = 0;
    constants2.PLAY_HARD_STATE = 1;
    constants2.GAME_OVER_STATE = 2;
    constants2.INSTRUCTIONS_STATE = 3;
    // Game Constants
    constants2.METEOROLITE_NUM = 3;
    constants2.LABEL_FONT = "40px Consolas";
    constants2.LABEL_COLOUR = "#FFFF00";
    constants2.PLANE_LIVES = 3;
    constants2.ENEMY_NUM = 3;
})(constants2 || (constants2 = {}));
//# sourceMappingURL=constants2.js.map