// add active link function for navbar
const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.preventDefault();
      link.classList.add("active");
    });
  });
}

const form = document.getElementById("form1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const pronouns = formData.get("pronouns");
  const message = formData.get("message");
  console.log("Form submitted with values:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Pronouns:", pronouns);
  console.log("Message:", message);
});
