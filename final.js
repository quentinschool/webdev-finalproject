// add active link function for navbar
var btnContainer = document.getElementById("navbarNavAltMarkup");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
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
