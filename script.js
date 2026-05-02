// Install PWA button
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

document.querySelector('.install-btn').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
  }
});

// Smooth fade-in
document.body.style.opacity = 0;
window.onload = () => {
  document.body.style.transition = "opacity 0.6s";
  document.body.style.opacity = 1;
};
