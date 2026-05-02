// Fade in
document.body.style.opacity = 0;

window.onload = () => {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = 1;
};

// subtle mouse parallax
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".bg-glow");
  glow.style.transform = `translate(${e.clientX * 0.02}px, ${e.clientY * 0.02}px)`;
});
