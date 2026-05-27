document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-slideshow]").forEach((root) => {
  const slides = Array.from(root.querySelectorAll(".slide"));
  const dots = Array.from(root.querySelectorAll(".dot"));
  if (slides.length === 0) return;

  let i = slides.findIndex((s) => s.classList.contains("active"));
  if (i < 0) i = 0;

  const go = (next) => {
    slides[i].classList.remove("active");
    dots[i]?.classList.remove("active");
    i = (next + slides.length) % slides.length;
    slides[i].classList.add("active");
    dots[i]?.classList.add("active");
  };

  root.querySelector(".slide-prev")?.addEventListener("click", () => go(i - 1));
  root.querySelector(".slide-next")?.addEventListener("click", () => go(i + 1));
  dots.forEach((d, idx) => d.addEventListener("click", () => go(idx)));
});

document.querySelectorAll("[data-tabs]").forEach((root) => {
  const buttons = root.querySelectorAll(".tab-btn[data-tab]");
  const panels = root.querySelectorAll(".tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.tab;
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", String(on));
      });
      panels.forEach((p) => {
        p.classList.toggle("active", p.dataset.panel === name);
      });
    });
  });
});
