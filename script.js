$(document).ready(function() {
    // Contact Form Submission
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "https://getform.io/your-form-endpoint",
        data: formData,
        success: function(response) {
          alert('Form submitted successfully!');
          $('#contactModal').modal('hide');
          // Optionally clear the form fields
          $('#contactForm')[0].reset();
        },
        error: function(error) {
          alert('Form submission failed!');
          console.error(error);
        }
      });
    });
  
    // Slider Functionality for What We Do Section
    // Initialize your slider here using a suitable plugin or custom code
  
    // Image Change on Our Project Section
    $('.project-list li').click(function() {
      var imageUrl = $(this).attr('data-image');
      $('.project-image').attr('src', imageUrl);
    });
  
    // Other interactions and animations as needed
  });
  