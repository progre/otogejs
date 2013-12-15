import Enumerable = require('linqjs');
import GameMain = require('./../app/gamemain');

export = GameMainView;
class GameMainView {
    private stage: createjs.Stage;
    private chips: createjs.Shape[] = [];
    private model: any;

    init(stage: createjs.Stage, width: number, height: number, model: GameMain) {
        this.stage = stage;
        this.model = model;

        var background = new createjs.Shape();
        background.graphics.beginFill('#aaa').drawRect(0, 0, width, height);
        stage.addChild(background);

        Enumerable.repeat(null, 100)
            .forEach(() => {
                var chip = new createjs.Shape();
                chip.graphics.beginFill('#fff').drawRect(-16, -4, 32, 4);
                this.chips.push(chip);
                stage.addChild(chip);
            });
    }

    update() {
        var idx = 0;
        var chip = this.chips[idx++];
        chip.x = 100;
        chip.y = 100;
    }
}
