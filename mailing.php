<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Function to send an email for contact us
function sendEmail($email, $message)
{
    $mail = new PHPMailer(true);

    // SMTP server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com'; // Your SMTP server address
        $mail->SMTPAuth = true;
        $mail->Username = 'moughees.hasan@huboweb.com'; // Your SMTP username
        $mail->Password = 'HuboWeb@2024##'; // Your SMTP password
        $mail->SMTPSecure = 'ssl'; // Use 'tls' or 'ssl'
        $mail->Port = 465; // Your SMTP server's port number (e.g., 587 for TLS or 465 for SSL)

        // Set other email-related configurations
        $mail->setFrom('moughees.hasan@huboweb.com', 'O2 Lead');
        $mail->addAddress('mougheeshassan@gmail.com', 'name');
        $mail->isHTML(true);

        $mail->Subject = 'O2 Form Submission';
        $mail->Body = "<p>Email: $email</p><p>Message: $message</p>";
        $mail->AltBody = "Email: $email\nMessage: $message\n";

        $mail->send();

        return 'Email has been sent successfully';

    // try {
    //     // SMTP server settings
    //     $mail->isSMTP();
    //     $mail->Host = 'smtp.hostinger.com'; // Your SMTP server address
    //     $mail->SMTPAuth = true;
    //     $mail->Username = 'moughees.hasan@huboweb.com'; // Your SMTP username
    //     $mail->Password = 'HuboWeb@2024##'; // Your SMTP password
    //     $mail->SMTPSecure = 'ssl'; // Use 'tls' or 'ssl'
    //     $mail->Port = 465; // Your SMTP server's port number (e.g., 587 for TLS or 465 for SSL)

    //     // Set other email-related configurations
    //     $mail->setFrom('moughees.hasan@huboweb.com', 'O2 Lead');
    //     $mail->addAddress('mougheeshassan@gmail.com', 'name');
    //     $mail->isHTML(true);

    //     $mail->Subject = 'O2 Form Submission';
    //     $mail->Body = "<p>Email: $email</p><p>Message: $message</p>";
    //     $mail->AltBody = "Email: $email\nMessage: $message\n";

    //     $mail->send();
    //     return 'Email has been sent successfully';
    // } catch (Exception $e) {
    //     return 'Mailer Error: ' . $mail->ErrorInfo;
    // }
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // PHP Post Request receive
    $email = $_POST['email'];
    $message = $_POST['message'];
    $result = sendEmail( $email, $message);

    // echo $result;
} else {
    echo 'Invalid request method';
}