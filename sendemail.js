const name = '${document.getElementById('txt_Fname').value} ${document.getElementById('txt_Lname').value}';
const email = document.getElementById('email_address').value;
const phone = document.getElementById('phone').value;
const comments = document.getElementById('comments').value;
const method = document.getElementById('method').value;
const offer = document.getElementById('offer').value;

let errors = '';

if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
  errors += 'Invalid email address.\n';
}

if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
  errors += 'Invalid phone number.\n';
}

if (comments.trim() === '') {
  errors += 'Please enter comments.\n';
}

if (errors === '') {
  const to = 'CecillePapa@student.purdueglobal.edu';
  const subject = 'Contact Form Submission from ${name} for EZ Shop';
  let message = 'You have received a new message from your contact form.\n\n';
  message += 'Here are the details:\n\n';
  message += 'Name: ${name}\n';
  message += 'Email: ${email}\n';
  message += 'Phone: ${phone}\n';
  message += 'Comments: ${comments}\n';
  message += 'Preferred Contact Method: ${method}\n';
  message += 'Special Offer: ${offer}\n';

  // Send email
  // ...
} else {
  // Handle errors
  // ...
}
