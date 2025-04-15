// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent actual form submission
  
      const name = form.querySelector("input[type='text']").value.trim();
      const phone = form.querySelector("input[type='tel']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const comments = form.querySelector("textarea").value.trim();
  
      if (!name || !phone || !email) {
        alert("Perry 216-562-7177 ptlawncare.cleanup@gmail.com");
        return;
      }
  
      // Display a confirmation (this could be replaced with a real backend call)
      alert("Thank you for contacting P&T Lawncare, " + name + "! We’ll get back to you shortly.");
      form.reset();
    });
  });
  