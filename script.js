document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPage = this.getAttribute("href");
      window.location.href = targetPage;
    });
  });

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const comments = document.getElementById("comments").value.trim();

      if (!firstName || !lastName || !phone || !email || !comments) {
        alert("Please fill out all fields.");
        event.preventDefault();
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
      }
    });
  }
});
