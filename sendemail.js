// sendemail.js file

// import emailjs library
import emailjs from 'emailjs-com';

// define sendEmail function
function sendEmail(formData) {
  // get the values from the form data
  let firstName = formData.get('txt_Fname');
  let lastName = formData.get('txt_Lname');
  let email = formData.get('email_address');
  let phone = formData.get('phone_number');
  let comments = formData.get('comments');
  let method = formData.get('method');
  let offer = formData.get('offer');

  // create an object with the variables for the email template
  let params = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    comments: comments,
    method: method,
    offer: offer
  };

  // send an email using emailjs API
    emailjs.send('service_vtb5y3c', 'service_vtb5y3c', params, 'Q6FOOPst1gHGfCqHw')
    .then(function(response) {
      // display a success message if the email is sent
      alert('Your message has been sent successfully!');
    }, function(error) {
      // display an error message if the email fails to send
      alert('Oops... something went wrong. Please try again later.');
    });
}

// get the form element from the HTML file
let form = document.querySelector('form');

// get the submit button element from the HTML file
let submitButton = document.querySelector('input[type=submit]');

// add an event listener to the submit button that calls the sendEmail function
submitButton.addEventListener('click', function(event) {
  // prevent the default behavior of the form submission
  event.preventDefault();

  // get the form data as a FormData object
  let formData = new FormData(form);

  // call the sendEmail function 
  sendEmail(formData);
});
