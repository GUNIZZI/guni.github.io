<template>
    <span class="bg"></span>
    <canvas ref="canvas"></canvas>
</template>

<script>
// import CanvasElm from './CanvasElm.js';

export default {
    name: "BACKCANVAS",
    data() {
        return {
            canvas: null,
            ctx: null,
            mousePos: null,
            numThingsX: null,
            numThingsY: null,
            things: null,
        };
    },
    components: {},
    computed: {},
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");

        // Create circular clipping region
        this.ctx.beginPath();
        this.ctx.arc(100, 75, 50, 0, Math.PI * 2);
        this.ctx.clip();

        // Draw stuff that gets clipped
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, 50, 50);
        this.ctx.fillStyle = "orange";
        this.ctx.fillRect(0, 0, 100, 100);

        // this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // this.ctx.beginPath();
        // this.ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
        // this.ctx.clip();

        // this.ctx.save();
        // this.ctx.beginPath();
        // this.ctx.moveTo(20, 10);
        // this.ctx.lineTo(100, 30);
        // this.ctx.lineTo(180, 10);
        // this.ctx.lineTo(200, 60);
        // this.ctx.arcTo(180, 70, 120, 0, 10);
        // this.ctx.lineTo(200, 180);
        // this.ctx.lineTo(100, 150);
        // this.ctx.lineTo(70, 180);
        // this.ctx.lineTo(20, 130);
        // this.ctx.lineTo(50, 70);
        // this.ctx.closePath();
        // this.ctx.clip();
        // // this.ctx.drawImage(img, 0, 0);
        // this.ctx.restore();
    },
    watch: {},
    methods: {},
};

class CanvasCircle {
    constructor(ctx, radius, speed, width, xPos, yPos) {
        this.ctx = ctx;
        this.radius = radius;
        this.speed = speed;
        this.width = width;
        this.xPos = xPos;
        this.yPos = yPos;
        this.opacity = 0.01 + Math.random() * 0.1;
        // this.fill = 'rgba(' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ',' + parseInt(Math.random() * 255) + ',' + this.opacity + ')';
        this.fill = "rgba(0,0,0," + this.opacity + ")";

        this.counter = 0;

        var signHelper = Math.floor(Math.random() * 2);

        if (signHelper == 1) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }
    }

    update() {
        this.counter += this.sign * this.speed;
        this.ctx.beginPath();
        this.ctx.arc(
            this.xPos + Math.cos(this.counter / 100) * this.radius,
            this.yPos + Math.sin(this.counter / 100) * this.radius,
            this.width,
            0,
            Math.PI * 2,
            false
        );
        this.ctx.closePath();
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
    }
}
</script>

<style lang="scss" scope>
.bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: red;
}
canvas {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    pointer-events: none;
}
</style>
