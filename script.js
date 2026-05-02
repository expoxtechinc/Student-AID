// FADE IN
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "opacity 1s";
  document.body.style.opacity = 1;
};

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.y -= 0.3;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(draw);
}

draw();

// MOUSE PARALLAX
document.addEventListener("mousemove", (e) => {
  document.querySelector(".hero").style.transform =
    `translate(${e.clientX * 0.01}px, ${e.clientY * 0.01}px)`;
});
