class Impostor {
    constructor(ctx, gameSize, chLive) {
        this.ctx = ctx;

        this.gameSize = gameSize;

        this.life = chLive;

        this.imageInstance = undefined;

        this.imPos = {
            x: this.gameSize.w - this.gameSize.w / 4,
            y: this.gameSize.h / 2,
        };
        this.imSize = { w: this.gameSize.w / , h: this.gameSize.h / 2 };
        this.drawImLiveSize = { w: this.gameSize.w / 4, h: 30 };

        this.vel = { x: 100, y: 160 };
        this.gravity = 0.4;

        this.bullets = [];

        this.init();
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = "./img/goku2.png";
    }
    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.imPos.x,
            this.imPos.y,
            this.imSize.w,
            this.imSize.h
        );

        this.bullets.forEach((bullet) => bullet.draw());
    }

    drawImLive() {
        this.ctx.fillStyle =
        this.ctx.fillRect(
            this.gameSize.w / 2 + 100,
            0,
            this.drawImLiveSize.w,
            this.drawImLiveSize.h
        );
    }

    shoot() {
        this.bullets.push(
            new Bullets(
                this.ctx,
                this.gameSize,
                this.imPos.x,
                this.imPos.y,
                this.imSize.w,
                this.imSize.h
            )
        );
        console.log("DISPARAAAAAAA");
    }

    moveLeft() {
        
        this.imPos.x -= this.vel.x;

        // this.lifeImage100 = new Image()
        // this.lifeImage100.src = './img/10V.png'
    }
    

    moveRight() {
        if (this.imPos.x + this.vel.x <= this.gameSize.w - this.imSize.w) {
            this.imPos.x += this.vel.x;
        } else this.imPos.x = this.gameSize.w - this.imSize.w;
    }
}
