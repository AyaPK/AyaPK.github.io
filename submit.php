<?php
/* [VERIFY CAPTCHA FIRST] */
$secret = '6LeK5NMUAAAAANq4KjTTk7TAfQrBr9g1paI1KvN-'; // CHANGE THIS TO YOUR OWN!
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST['g-recaptcha-response'];
$verify = json_decode(file_get_contents($url));

/* [PROCESS YOUR FORM] */
if ($verify->success) {
  $to = "aya.pk.contact@gmail.com"; // CHANGE THIS TO YOUR OWN!
  $subject = "Contact Form";
  $message = "Name - " . $_POST['name'] . "<br>";
  $message .= "Email - " . $_POST['email'] . "<br>";
  $message .= "Message - " . $_POST['message'] . "<br>";
  if (@mail($to, $subject, $message)) {
    // Send mail OK
    // @TODO - Show a nice thank you page or something
    echo "Sent";
  } else {
    // Send mail error
    // @TODO - Ask user to retry or give alternative
    echo "Error <br>";
    echo "Name - " . $_POST['name'] . "<br>";
    echo "Email - " . $_POST['email'] . "<br>";
    echo "Message - " . $_POST['message'] . "<br>";
  }
} else {
  // Invalid captcha
  // @TODO - Show error message, ask user to retry
  echo "recaptcha";
}
?>