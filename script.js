document.addEventListener('DOMContentLoaded', function(){

const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    //validate username
   const usernameInput = document.getElementById('username');
   const username = usernameInput.value.trim();


   //validate email
   const emailInput = document.getElementById('email');
   const email = emailInput.value.trim();


   //validate password
   const passwordInput = document.getElementById('password');
   const password = passwordInput.value.trim();

   //initialize validation variables
   let isValid = true;

   const messages = [];

    //username validation
   if (username.length < 3) {
    isValid = false;
    messages.push('Enter a valid username with more than 3 letters');
   }

   //email validation
   if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push("email should include both '@' and '.' characters")
   }

   //password validation 
   if (password.length < 8) {
    isValid = false;
    messages.push("password must be 8 characters and above")
   }

   //feedback

//    feedbackDiv.style.display = 'block';

//    if (isValid) {
//     feedbackDiv.textContent = 'Registration Successful!';
//     feedbackDiv.style.color = '#28a745';
//    } else {
//     feedbackDiv.innerHTML = messages.join('<br>');
//     feedbackDiv.style.color ='#dc3545';
//    }
   

let feedback = document.getElementById('form-feedback');

feedback.style.display = 'block';
if (isValid) {
    feedback.textContent = 'Registration Successful!';
    feedback.style.color = '#28a745';
}  else {
    feedback.innerHTML = messages.join('<br>');
    feedbackDiv.style.color ='#dc3545';
}
});

});