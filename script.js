// Smooth page load
document.body.style.opacity = 0;

window.onload = () => {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = 1;
};

// OPTIONAL: auto-suggest opening app after 3 seconds
setTimeout(() => {
  const confirmOpen = confirm("Open Student Aid App?");
  if (confirmOpen) {
    window.location.href = "https://studentaid.base44.app";
  }
}, 3000);
