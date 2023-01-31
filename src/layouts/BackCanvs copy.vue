<template>
    <canvas ref="canvas" :width="canvasSize.wid" :height="canvasSize.hgt"></canvas>
</template>

<script>
// import CanvasElm from './CanvasElm.js';

export default {
    name: 'BACKCANVAS',
    data() {
        return {
            ctx: null,
            canvasSize: {
                wid: 1000,
                hgt: 1000,
            },
            circles: [],
            logos: [],
            requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        };
    },
    components: {},
    computed: {},
    mounted() {
        window.addEventListener('resize', this.evtResize, false);
        this.evtResize();

        this.ctx = this.$refs.canvas.getContext('2d');
        this.drawCircles();
    },
    watch: {},
    methods: {
        drawCircles() {
            const _this = this;
            for (let i = 0; i < 10; i++) {
                const randomX = -200 + Math.round(Math.random() * this.canvasSize.wid);
                const randomY = -200 + Math.round(Math.random() * this.canvasSize.hgt);
                const speed = 0.1 + Math.random() * 2;
                const size = 20 + Math.random() * 200;
                let circle = new CanvasCircle(_this.ctx, 100, speed, size, randomX, randomY);
                _this.circles.push(circle);
            }

            this.logos.push(new Image());
            this.logos.push(new Image());
            this.logos[0].src =
                'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40px" height="40px" viewBox="15 10 70 80"><g fill="#050505"><path d="M21.667 73.809V33.867l28.33-16.188 28.337 16.188V66.13L49.997 82.321 35 73.75V41.604l14.997-8.57L65 41.604v16.788l-15.003 8.571-1.663-.95v-16.67l8.382-4.792-6.719-3.838-8.33 4.763V69.88l8.33 4.762 21.67-12.383V37.737l-21.67-12.379-21.663 12.379v39.88L49.997 90 85 70V30L49.997 10 15 30v40z"></path></g></svg>');
            this.logos[1].src =
                'data:image/svg+xml;charset=utf-8,' +
                encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40px" height="40px" viewBox="4.690000057220459 -78.5 241.13999938964844 79.6500015258789"><g fill="#050505"><path d="M9.56 -5.83C12.81 -1.18 18.26 1.15 25.91 1.15C31.84 1.15 36.01 -1.37 38.44 -6.41L39.39 0L50.68 0L50.68 -40.16L28.3 -40.16L28.3 -30.12L35.28 -30.12L35.28 -21.04C35.28 -14.34 33.05 -11 28.59 -11C26.17 -11 24.49 -11.87 23.57 -13.63C22.64 -15.38 22.18 -17.78 22.18 -20.84L22.18 -56.7C22.18 -59.76 22.55 -62.15 23.28 -63.87C24.02 -65.59 25.62 -66.45 28.11 -66.45C30.53 -66.45 32.09 -65.67 32.8 -64.11C33.5 -62.55 33.85 -60.24 33.85 -57.18L33.85 -50.87L50.58 -50.87L50.58 -55.84C50.58 -63.04 48.83 -68.62 45.32 -72.57C41.82 -76.52 36.01 -78.5 27.92 -78.5C19.51 -78.5 13.53 -76.2 9.99 -71.62C6.45 -67.03 4.69 -60.36 4.69 -51.63L4.69 -25.62C4.69 -17.08 6.31 -10.49 9.56 -5.83Z M89.11 -1.67C92.49 0.21 97.08 1.15 102.88 1.15C108.68 1.15 113.26 0.21 116.6 -1.67C119.95 -3.55 122.32 -6.33 123.73 -9.99C125.13 -13.66 125.83 -18.33 125.83 -24L125.83 -77.45L108.81 -77.45L108.81 -21.42C108.81 -18.29 108.43 -15.81 107.66 -13.96C106.9 -12.11 105.3 -11.19 102.88 -11.19C100.46 -11.19 98.85 -12.11 98.05 -13.96C97.26 -15.81 96.86 -18.29 96.86 -21.42L96.86 -77.45L79.93 -77.45L79.93 -24C79.93 -18.33 80.62 -13.66 81.99 -9.99C83.36 -6.33 85.73 -3.55 89.11 -1.67Z M155.85 -77.45L155.85 0L170.48 0L170.48 -40.16L186.35 0L197.92 0L197.92 -77.45L183.77 -77.45L183.77 -40.16L167.9 -77.45Z M228.71 -77.45L228.71 0L245.83 0L245.83 -77.45Z"></path></g></svg>'
                );

            this.draw();
        },
        draw() {
            this.ctx.clearRect(0, 0, this.canvasSize.wid, this.canvasSize.hgt);

            for (var i = 0; i < this.circles.length; i++) {
                var myCircle = this.circles[i];
                myCircle.update();
            }

            this.ctx.drawImage(this.logos[0], this.canvasSize.wid - 70, this.canvasSize.hgt - 80);
            this.ctx.drawImage(this.logos[1], this.canvasSize.wid - 70, this.canvasSize.hgt - 50);

            requestAnimationFrame(this.draw);
        },
        evtResize() {
            this.canvasSize.wid = window.innerWidth;
            this.canvasSize.hgt = window.innerHeight;
            // console.log();
        },
    },
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
        this.fill = 'rgba(0,0,0,' + this.opacity + ')';

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
        this.ctx.arc(this.xPos + Math.cos(this.counter / 100) * this.radius, this.yPos + Math.sin(this.counter / 100) * this.radius, this.width, 0, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
    }
}
</script>

<style lang="scss" scope>
canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
}
</style>
