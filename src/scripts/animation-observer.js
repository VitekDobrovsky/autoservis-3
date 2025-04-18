const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
  }
);

document.querySelectorAll(".rectangle").forEach((el) => {
  observer.observe(el);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".page__header");
  const navbar = document.querySelector(".page__navbar");
  if (window.scrollY > 24) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.scrollY > 650) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
