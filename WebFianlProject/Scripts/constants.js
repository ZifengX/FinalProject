/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
var constants;
(function (constants) {
    // Stage Size Constants
    constants.GAME_WIDTH = 550;
    constants.GAME_HEIGHT = 650;
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;
    constants.LEVEL2_STATE = 4;
    constants.LEVEL3_STATE = 5;
    // Game Constants
    constants.METEOROLITE_NUM = 3;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.PLANE_LIVES = 3;
    constants.ENEMY_NUM = 1;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map