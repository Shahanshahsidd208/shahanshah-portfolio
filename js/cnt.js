document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Prepare the email template parameters
    var templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_d5atvxr', 'template_bv8dkga', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  });