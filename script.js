$(document).ready(function() {
    // Handle form submission with AJAX
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var password = $("#password").val();

        // Validate fields (you can add more validation as needed)
        if (name == "" || email == "" || phone == "" || password == "") {
            alert("All fields are required!");
            return;
        }

        // Send data to PHP using AJAX
        $.ajax({
            url: 'process_form.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                phone: phone,
                password: password
            },
            success: function(response) {
                // Display the response from PHP
                $('#responseMessage').html(response).show();
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function() {
                alert("Error in submission, please try again.");
            }
        });
    });
});
