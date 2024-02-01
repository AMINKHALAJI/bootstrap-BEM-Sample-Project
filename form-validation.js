const form = document.querySelector("#form");
const email = document.getElementById("email");
const nav = document.querySelector("#nav-scroll");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  email.classList.add("failed");
  const emailVal = email.value;
  const validEmail = emailVal.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const validEmailLength = validEmail[0].length;

  if (validEmailLength !== 0) {
    e.preventDefault();
    email.classList.remove("failed");
    form.classList.add("was-validated");
    email.classList.add("successForm");

    form.innerHTML = `<h4>Your Request Has Been Submitted Successfully </h4>`;
    form.style.color = "green";
    form.style.display = "flex";
    form.style.justifyContent = "center";
  }
});

// this part change the theme of the navbar if it srolled down
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  if (currentY > 0) {
    nav.classList.remove("navbar-dark");
    nav.classList.add("navbar-light");
  } else {
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
  }
});
