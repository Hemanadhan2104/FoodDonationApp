$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault();
      
      // Get form data
      var email = $('#email').val();
      var password = $('#password').val();
      
      // Create an object with email and password
      var registrationData = {
        email: email,
        password: password
      };
      
      // Convert the object to a JSON string
      var registrationDataJSON = JSON.stringify(registrationData);
      
      // Save registration data to session storage
      sessionStorage.setItem('registrationData', registrationDataJSON);
      sessionStorage.setItem('isRegistered', true);
      
      // Redirect to Login Page
      window.location.href = 'samplefoodlogin.html';
    });
  });