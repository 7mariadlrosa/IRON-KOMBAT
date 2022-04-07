class LifeIm {
    constructor(ctx, gameSize, lifeImPosX, lifeImPosY, lifeImSizeW, lifeImSizeH) {
        this.ctx = ctx;
        this.gameSize = gameSize;

        this.lifeImPos = { x: lifeImPosX, y: lifeImPosY };
        this.lifeImSize = { w: lifeImSizeW, h: lifeImSizeH };

        // this.imageInstance = new Image()
        // this.imageInstance.src = imageInstance
        //this.init();
    }

    init() {
        // this.imageInstance = new Image();
        // this.imageInstance.src = imageInstance;
    }

    draw(imgInstance) {
        this.ctx.drawImage(
            imgInstance,
            this.lifeImPos.x,
            this.lifeImPos.y,
            this.lifeImSize.w,
            this.lifeImSize.h
        );
    }

}