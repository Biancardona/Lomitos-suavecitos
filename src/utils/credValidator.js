
  export function validateEmailLength(email) {
    if (email.length < 4) {
      alert('Please enter an email address longer than 3 characters.');
    }
  }
  
  export function validatePasswordLength(password) {
    if (password.length < 4) {
      alert('Please enter a password longer than 3 characters.');
    }
  }
  