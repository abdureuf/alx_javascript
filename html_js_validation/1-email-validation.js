document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("emailForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      validateEmail();
    });
  });
  
  function validateEmail() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
  
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!regex.test(email)) {
      error.textContent = "Please enter a validemail address.";
      document.getElementById("email").classList.add("error");
    } else {
      error.textContent = "";
      document.getElementById("email").classList.remove("error");
      document.getElementById("emailForm").submit();
    }
  }