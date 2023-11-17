$(document).ready(function() {
    var isRegistered = sessionStorage.getItem('isRegistered');
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isRegistered) {
      // User is registered, show login form
      document.getElementById('loginForm').style.display = 'block';
    } else {
      // User is not registered, show registration link
      document.getElementById('registrationLink').style.display = 'block';
    }
    if (isLoggedIn) {
        // User is already logged in, redirect to home page
        window.location.href = 'samplefoodhomepage.html';
      }
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      
      // Get form data
      var email = $('#email').val();
      var password = $('#password').val();
      
      // Retrieve registration data from session storage
      var registrationDataJSON = sessionStorage.getItem('registrationData');
      
      if (registrationDataJSON) {
        // Convert the JSON string back to an object
        var registrationData = JSON.parse(registrationDataJSON);
        
        // Compare email and password with the stored registration data
        if (email === registrationData.email && password === registrationData.password) {
          // Redirect to Home Page
          window.location.href = 'samplefoodhomepage.html';
        } else {
          // Display error message
          $('#loginError').text('User not found.');
        }
      } else {
        // Redirect to Register Page if no registration data is found
        window.location.href = 'samplefoodregisterpage.html';
      }
    });
  });
  