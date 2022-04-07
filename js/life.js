class Life {
    constructor(ctx, gameSize, lifePosX, lifePosY, lifeSizeW, lifeSizeH) {
        this.ctx = ctx;
        this.gameSize = gameSize;

        this.lifePos = { x: lifePosX, y: lifePosY };
        this.lifeSize = { w: lifeSizeW, h: lifeSizeH };

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
            this.lifePos.x,
            this.lifePos.y,
            this.lifeSize.w,
            this.lifeSize.h
        );
    }

}