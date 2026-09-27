// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Reveal Animation
const cards = document.querySelectorAll(".card,.stat,.hero-content");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all .8s ease";
  observer.observe(card);
});

// Contact Form Demo
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("✅ Thank you! Your request has been submitted successfully.");

    form.reset();
  });
}

// Pricing Buttons
document.querySelectorAll(".btn").forEach(btn => {
  if (btn.textContent.includes("Choose Plan")) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("🎉 Plan Selected Successfully!");
    });
  }
});

// Counter Animation
const stats = document.querySelectorAll(".stat h2");

stats.forEach(stat => {
  const target = parseInt(stat.innerText);
  if (isNaN(target)) return;

  let count = 0;

  const update = () => {
    count += Math.ceil(target / 50);

    if (count >= target) {
      stat.innerText = target + "+";
    } else {
      stat.innerText = count + "+";
      requestAnimationFrame(update);
    }
  };

  update();
});

console.log("Nova Business Website Loaded Successfully 🚀");
