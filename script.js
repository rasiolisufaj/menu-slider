const toggle = document.getElementById("toggle");
const modal = document.getElementById("modal");
const open = document.getElementById("open");
const close = document.getElementById("close");

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show the SignUp form
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide the SignUp form
close.addEventListener("click", () => modal.classList.remove("show-modal"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  }
});
