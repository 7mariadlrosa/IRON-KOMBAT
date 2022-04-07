class Bullets {
    constructor(ctx, gameSize, imPosX, imPosY, imSizeW, imSizeH) {
        this.ctx = ctx;
        this.gameSize = gameSize;

        this.imSize = { w: imSizeW, h: imSizeH };
        this.bullPos = {
            x: imPosX,
            y: imPosY + this.gameSize.h / 4,
        };

        this.bullSize = { w: 100, h: 100 };

        this.radius = 10;

        this.floor = this.gameSize.h;

        this.vel = { x: -30, y: 0 };
        this.init();
    }

    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = "./img/BULLET.png";
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.bullPos.x,
            this.bullPos.y,
            this.bullSize.w,
            this.bullSize.h
        );

        this.move();
        // console.log("SALEN LAS BALAS?");
    }
    move() {
        this.bullPos.x += this.vel.x;
    }
}
