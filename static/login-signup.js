// login.js

document.addEventListener("DOMContentLoaded", () => {
    // Login form validation
    const loginForm = document.querySelector("form[action='/login']");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        const email = document.getElementById("email");
        const password = document.getElementById("pass1");
  
        if (!email.value || !password.value) {
          e.preventDefault();
          alert("Please fill in both email and password fields.");
        }
      });
    }
  
    // Signup form validation
    const signupForm = document.querySelector("form[action='/signup']");
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const firstName = document.getElementById("fname");
        const lastName = document.getElementById("lname");
        const password = document.getElementById("pass1");
        const confirmPassword = document.getElementById("pass2");
  
        // Check if fields are empty
        if (!username.value || !email.value || !firstName.value || !lastName.value || !password.value || !confirmPassword.value) {
          e.preventDefault();
          alert("Please fill in all fields.");
          return;
        }
  
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
          e.preventDefault();
          alert("Passwords do not match.");
          return;
        }
  
        // Check for spaces in username
        if (/\s/.test(username.value)) {
          e.preventDefault();
          alert("Username cannot contain spaces.");
          return;
        }
      });
    }
  });
  