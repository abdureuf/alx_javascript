document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("passwordForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      validatePassword();
    });
  });
  
  function validatePassword() {
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
  
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!regex.test(password)) {
      error.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
    } else {
      error.textContent = "";
      document.getElementById("passwordForm").submit();
    }
  }