<?php
// Get the form data
$name = $_POST['txt_Fname'] . " " . $_POST['txt_Lname']; // Concatenate the first and last name
$email = $_POST['email_address'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];
$method = $_POST['method'];
$offer = $_POST['offer'];

// Validate the form data and check for errors
$errors = ""; // Initialize an empty string to store any errors
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { // Check if the email address is valid
  $errors .= "Invalid email address.\n"; // Append an error message to the errors string
}
if (!preg_match("/[0-9]{3}-[0-9]{3}-[0-9]{4}/", $phone)) { // Check if the phone number matches the pattern
  $errors .= "Invalid phone number.\n"; // Append an error message to the errors string
}
if (empty($comments)) { // Check if the comments are empty
  $errors .= "Please enter comments.\n"; // Append an error message to the errors string
}

// Send the email if there are no errors
if (empty($errors)) { // Check if there are no errors
  $to = "cecillepapa@student.purdueglobal.edu"; // Specify the recipient's email address
  $subject = "Contact Form Submission from $name for EZ Shop"; // Specify the subject of the email
  $message = "You have received a new message from your contact form.\n\n"; // Specify the message body of the email
  $message .= "Here are the details:\n\n"; // Append some text to the message body
  $message .= "Name: $name\n"; // Append the name to the message body
  $message .= "Email: $email\n"; // Append the email address to the message body
  $message .= "Phone: $phone\n"; // Append the phone number to the message body
  $message .= "Preferred contact method: $method\n"; // Append the preferred contact method to the message body
  $message .= "Comments: \n$comments\n"; // Append the comments to the message body
  if ($offer == "checked") { // Check if the offer checkbox is checked
    $message .= "\nThis person has opted in to receive exclusive offers, news, and updates via email.\n"; // Append some text to the message body
  }
  $message = wordwrap($message, 70); // Wrap long lines of text in the message body
  $headers = "From: $email\r\n"; // Specify some headers for the email
  $headers .= "Reply-To: $email\r\n"; // Specify some headers for the email
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // Specify some headers for the email
  mail($to, $subject, $message, $headers); // Send the email using mail() function
  
  // Redirect to a thank you page after sending the email
  header("Location: thankyou.html");
}

// Display any errors or success messages
if (!empty($errors)) { // Check if there are any errors
  echo "<p style='color: red; font-weight: bold;'>There were some problems with your form submission:</p>"; // Print out a paragraph with red and bold text
  echo "<ul style='color: red;'>"; // Start an unordered list with red text
  echo nl2br("<li>$errors</li>"); // Print out each error as a list item and convert newlines to HTML line breaks
  echo "</ul>"; // End the unordered list
  echo "<p style='color: red; font-weight: bold;'>Please go back and fix these errors.</p>"; // Print out another paragraph with red and bold text
} else { // If there are no errors
  echo "<p style='color: green; font-weight: bold;'>Thank you for contacting us. We will get back to you soon.</p>"; // Print out a paragraph with green and bold text
}
?>










