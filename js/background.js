class Background {
    constructor(ctx, posBackX, posBackY, gameSizeH, gameSizeW) {
        this.ctx = ctx;
        this.gameSize = { h: gameSizeH, w: gameSizeW }
        this.posBack = { x: posBackX, y: posBackY }
        this.imageInstance = new Image();
        this.imageInstance.src = "./img/fondo1.jpg";
    };

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.posBack.x,
            this.posBack.y,
            this.gameSize.w,
            this.gameSize.h
        );
    }
}
