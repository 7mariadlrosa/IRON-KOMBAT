class Character {
    constructor(ctx, gameSize, chLive) {
        this.ctx = ctx;
        this.gameSize = gameSize;

        this.life = chLive;

        this.imageInstance = undefined;

        this.floor = this.gameSize.h;

        this.chaSize = { w: this.gameSize.w / 5, h: this.gameSize.h / 2 };
        this.drawCharLiveSize = { w: this.gameSize.w / 4, h: 30 };

        this.chaPos = { x: this.gameSize.w / 4, y: this.gameSize.h / 2 };

        this.vel = { x: 40, y: 250 };
        this.gravity = 1;

        this.init();
    }

    moveLeft() {
        if (this.chaPos.x > 0) {
            this.chaPos.x -= this.vel.x;
        } else this.chaPos.x = 0;
    }
    moveRight() {
        this.chaPos.x += this.vel.x;
    }

    jump() {
        this.chaPos.y -= this.vel.y;
        this.vel.y = 0;
    }
    jumpDown() {
        if (this.chaPos.y + this.chaSize.h < this.floor) {
            this.vel.y += this.gravity;
            this.chaPos.y += this.vel.y;
        } else {
            this.vel.y = 250;
        }
    }

    atack1() {
        console.log("tikitiki");
    }
    atack2() {
        console.log("Dejate llevar");
    }

    // drawCharLive() {
    //     if (this.life = 100) {
    //         this.life = new Life(this.ctx, this.gameSize, this.lifePos, this.lifeSize,"./img/10V.png")
    //     } else if (this.life = 90) {
    //         this.life = new Life(this.ctx, this.gameSize, this.lifePos, this.lifeSize, "./img/9V.png")

    //     }

    // }


}

class German extends Character {
    constructor(ctx, gameSize, chLive) {
        super(ctx, gameSize, chLive);
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = "./img/GERMAN.png";
        this.imageInstance.frames = 6;
        this.imageInstance.framesCha = 0;
    }
    draw(framesIndex) {
        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesCha *
            (this.imageInstance.width / this.imageInstance.frames),
            0,
            this.imageInstance.width / this.imageInstance.frames,
            this.imageInstance.height,
            this.chaPos.x,
            this.chaPos.y,
            this.chaSize.w,
            this.chaSize.h
        );

    }

    animate() {
        this.imageInstance.framesCha++;
        if (this.imageInstance.framesCha >= this.imageInstance.frames) {
            this.imageInstance.framesCha = 0;
        }
    }
}