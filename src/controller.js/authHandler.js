export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // regular expression
  }
  
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
  