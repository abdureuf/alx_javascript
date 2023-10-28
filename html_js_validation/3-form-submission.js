document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("submitForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      handleFormSubmit();
    });
  });
  
  function handleFormSubmit() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var error = document.getElementById("error");
    var success = document.getElementById("success");
  
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
  
    if (name === "" || email === "") {
      error.textContent = "Please fill in all required fields.";
      success.textContent = "";
      
    } else {
      error.textContent = "";
      success.textContent = "Form submitted successfully!";
      
    }
    
  }