// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.width = (10 + Math.random() * 20) + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);

// Sparkles animation
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('spark');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '5px';
    sparkle.style.height = '5px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.opacity = Math.random();
    document.getElementById('sparkles').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}
setInterval(createSparkle, 100);

// Fireworks effect
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.alpha = 1;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02;
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}
let particles = [];

function launchFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ['#ff3c3c','#ffdd3c','#3cffbf','#3c6bff','#ff3cdd'];
    for(let i=0;i<30;i++){
        particles.push(new Particle(x, y, colors[Math.floor(Math.random()*colors.length)]));
    }
}
setInterval(launchFirework, 800);

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
        p.update();
        p.draw();
        if(p.alpha <=0) particles.splice(i,1);
    });
    requestAnimationFrame(animate);
}
animate();

// Music autoplay handled by <audio autoplay loop> in HTML

