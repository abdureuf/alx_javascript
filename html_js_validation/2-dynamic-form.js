document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("dynamicForm");
    var numFieldsSelect = document.getElementById("numFields");
  
    numFieldsSelect.addEventListener("change", function() {
      generateInputFields(numFieldsSelect.value);
    });
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      validateForm();
    });
  });
  
  function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previously generated fields
  
    for (var i = 1; i <= numFields; i++) {
      var inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = "field" + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm() {
    var inputFields = document.querySelectorAll("#inputContainer input");
    var error = document.getElementById("error");
  
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value.trim() === "") {
        error.textContent = "Please fill in all fields.";
        return; // Prevent form submission
      }
    }
  
    // If all fields are filled, clear the error message and allow form submission
    error.textContent = "";
    document.getElementById("dynamicForm").submit();
  }